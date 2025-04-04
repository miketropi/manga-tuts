import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const useAnimeStore = create(
  persist(
    (set, get) => ({
      animeList: [],
      wishlist: [],
      searchResults: [],
      loading: false,
      error: null,
      searchQuery: 'Yugioh!',
      searchFilters: {
        type: 'all',
        status: 'all',
        rating: 'all',
        genre: 'all',
      },
      pagination: {
        currentPage: 1,
        hasNextPage: false,
        lastPage: 1,
      },
      cache: {
        search: new Map(),
        details: new Map(),
      },

      setAnimeList: (animeList) => set({ animeList }),
      addToWishlist: (anime) =>
        set((state) => ({
          wishlist: [...state.wishlist, anime],
        })),
      removeFromWishlist: (animeId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.mal_id !== animeId),
        })),

      searchAnime: async (query, filters, page = 1) => {
        try {
          set({ loading: true, error: null });

          // Create cache key
          const cacheKey = JSON.stringify({ query, filters, page });
          const cachedResult = get().cache.search.get(cacheKey);

          // Check cache
          if (cachedResult && Date.now() - cachedResult.timestamp < CACHE_DURATION) {
            set({
              searchResults: cachedResult.data,
              pagination: cachedResult.pagination,
              loading: false,
            });
            return;
          }

          // Build query parameters
          const params = new URLSearchParams({
            q: query,
            page: page.toString(),
            limit: '24',
          });

          // Add filters if not 'all'
          if (filters.type !== 'all') params.append('type', filters.type);
          if (filters.status !== 'all') params.append('status', filters.status);
          if (filters.rating !== 'all') params.append('rating', filters.rating);
          if (filters.genre !== 'all') params.append('genres', filters.genre);

          const response = await axios.get(
            `https://api.jikan.moe/v4/anime?${params.toString()}`
          );

          const result = {
            data: response.data.data,
            pagination: {
              currentPage: page,
              hasNextPage: response.data.pagination.has_next_page,
              lastPage: response.data.pagination.last_visible_page,
            },
            timestamp: Date.now(),
          };

          // Update cache
          set((state) => ({
            cache: {
              ...state.cache,
              search: new Map(state.cache.search).set(cacheKey, result),
            },
          }));

          set({
            searchResults: result.data,
            pagination: result.pagination,
          });
        } catch (error) {
          set({ error: error.message });
        } finally {
          set({ loading: false });
        }
      },

      getAnimeDetails: async (id) => {
        try {
          set({ loading: true, error: null });

          // Check cache
          const cachedResult = get().cache.details.get(id);
          if (cachedResult && Date.now() - cachedResult.timestamp < CACHE_DURATION) {
            set({ loading: false });
            return cachedResult.data;
          }

          const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);

          // Update cache
          const result = {
            data: response.data.data,
            timestamp: Date.now(),
          };

          set((state) => ({
            cache: {
              ...state.cache,
              details: new Map(state.cache.details).set(id, result),
            },
          }));

          set({ loading: false });
          return result.data;
        } catch (error) {
          set({ error: error.message, loading: false });
          throw error;
        }
      },

      clearSearchResults: () => {
        set({
          searchResults: [],
          pagination: {
            currentPage: 1,
            hasNextPage: false,
            lastPage: 1,
          },
        });
      },

      clearCache: () => {
        set({
          cache: {
            search: new Map(),
            details: new Map(),
          },
        });
      },

      setSearchQuery: (query) => set({ searchQuery: query }),
      setSearchFilters: (filters) => set({ searchFilters: filters }),
    }),
    {
      name: 'anime-storage',
      partialize: (state) => ({ wishlist: state.wishlist }),
    }
  )
);

export default useAnimeStore; 