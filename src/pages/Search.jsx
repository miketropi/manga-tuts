import { useState, useEffect, useCallback } from 'react';
import { Search as SearchIcon, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import useAnimeStore from '../stores/useAnimeStore';
import AnimeCard from '../components/AnimeCard';
import useThemeStore from '../stores/useThemeStore';

const Search = () => {
  const { searchResults, loading, error, searchAnime, pagination, searchQuery, searchFilters, setSearchQuery, setSearchFilters } = useAnimeStore();

  const [query, setQuery] = useState(searchQuery);
  const [filters, setFilters] = useState(searchFilters);
  const [showFilters, setShowFilters] = useState(false);
  const { isDarkMode } = useThemeStore();

  // Update store when local state changes
  useEffect(() => {
    setSearchQuery(query);
  }, [query, setSearchQuery]);

  useEffect(() => {
    setSearchFilters(filters);
  }, [filters, setSearchFilters]);

  // Debounced search function
  const debouncedSearch = useCallback(
    (searchQuery, searchFilters, page = 1) => {
      if (searchQuery.trim()) {
        searchAnime(searchQuery, searchFilters, page);
      }
    },
    [searchAnime]
  );

  // Effect for debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(query, filters, 1);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [query, filters, debouncedSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Immediate search on button click
    if (query.trim()) {
      searchAnime(query, filters, 1);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.lastPage) {
      searchAnime(query, filters, newPage);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4 font-mono">Discover Anime</h1>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search anime..."
                className="w-full px-4 py-3 pl-12 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md text-gray-800 placeholder-gray-400"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-700 text-white rounded-xl hover:bg-indigo-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md font-medium"
            >
              Search
            </button>
            <button
              type="button"
              onClick={toggleFilters}
              className={`p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md ${
                showFilters 
                  ? 'bg-indigo-800 text-white' 
                  : 'bg-white text-indigo-700'
              }`}
            >
              <Filter className="w-6 h-6" />
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md animate-fadeIn">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="all">All Types</option>
                  <option value="tv">TV</option>
                  <option value="movie">Movie</option>
                  <option value="ova">OVA</option>
                  <option value="special">Special</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="all">All Status</option>
                  <option value="airing">Airing</option>
                  <option value="complete">Complete</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="all">All Ratings</option>
                  <option value="g">G - All Ages</option>
                  <option value="pg">PG - Children</option>
                  <option value="pg13">PG-13 - Teens 13+</option>
                  <option value="r17">R - 17+ (violence)</option>
                  <option value="r">R+ - Mild Nudity</option>
                  <option value="rx">Rx - Hentai</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Genre</label>
                <select
                  value={filters.genre}
                  onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="all">All Genres</option>
                  <option value="1">Action</option>
                  <option value="2">Adventure</option>
                  <option value="4">Comedy</option>
                  <option value="8">Drama</option>
                  <option value="10">Fantasy</option>
                  <option value="14">Horror</option>
                  <option value="22">Romance</option>
                  <option value="24">Sci-Fi</option>
                  <option value="36">Slice of Life</option>
                </select>
              </div>
            </div>
          )}
        </form>
      </div>

      {loading && (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium">Searching...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-6 rounded-xl shadow-md">
          <p className="font-medium">Oops! Something went wrong</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}

      {!loading && searchResults.length === 0 && query.trim() !== '' && (
        <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 p-6 rounded-xl shadow-md">
          <p className="font-medium">No results found</p>
          <p className="text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResults.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>

      {searchResults.length > 0 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </button>
          
          <span className="text-gray-700 dark:text-gray-300 font-medium bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm">
            Page {pagination.currentPage} of {pagination.lastPage || 1}
          </span>
          
          <button
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={!pagination.hasNextPage}
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;