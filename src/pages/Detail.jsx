import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bookmark, Star } from 'lucide-react';
import useAnimeStore from '../stores/useAnimeStore';
import OptimizedImage from '../components/OptimizedImage';
import DetailErrorBoundary from '../components/DetailErrorBoundary';

const Detail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { wishlist, addToWishlist, removeFromWishlist, getAnimeDetails } = useAnimeStore();

  const isInWishlist = wishlist.some((item) => item.mal_id === Number(id));

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(Number(id));
    } else if (anime) {
      addToWishlist(anime);
    }
  };

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        setLoading(true);
        const data = await getAnimeDetails(id);
        setAnime(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [id, getAnimeDetails]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
        Error: {error}
      </div>
    );
  }

  if (!anime) {
    return null;
  }

  return (
    <DetailErrorBoundary>
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-w-2 aspect-h-3">
              <OptimizedImage
                src={anime.images?.jpg?.large_image_url}
                alt={anime.title}
                className="w-full h-full rounded-lg"
              />
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{anime.title}</h1>
                <button
                  onClick={toggleWishlist}
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Bookmark className={`w-6 h-6 ${isInWishlist ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  Rating: {anime.score ? anime.score.toFixed(1) : 'N/A'}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Synopsis</h2>
                <p className="text-gray-600 dark:text-gray-300">{anime.synopsis}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Type</h3>
                  <p className="text-gray-600 dark:text-gray-400">{anime.type}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Status</h3>
                  <p className="text-gray-600 dark:text-gray-400">{anime.status}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Episodes</h3>
                  <p className="text-gray-600 dark:text-gray-400">{anime.episodes || 'N/A'}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Duration</h3>
                  <p className="text-gray-600 dark:text-gray-400">{anime.duration || 'N/A'}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genres?.map((genre) => (
                    <span
                      key={genre.mal_id}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {anime.characters && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Characters</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {anime.characters.map((character) => (
                <div key={character.mal_id} className="text-center">
                  <div className="aspect-w-1 aspect-h-1 mb-2">
                    <OptimizedImage
                      src={character.images?.jpg?.image_url}
                      alt={character.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{character.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{character.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DetailErrorBoundary>
  );
};

export default Detail; 