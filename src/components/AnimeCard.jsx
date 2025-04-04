import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import useAnimeStore from '../stores/useAnimeStore';
import OptimizedImage from './OptimizedImage';

const AnimeCard = ({ anime }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useAnimeStore();
  const isInWishlist = wishlist.some((item) => item.mal_id === anime.mal_id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(anime.mal_id);
    } else {
      addToWishlist(anime);
    }
  };

  return (
    <Link
      to={`/anime/${anime.mal_id}`}
      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-w-2 aspect-h-3">
        <OptimizedImage
          src={anime.images?.jpg?.image_url}
          alt={anime.title}
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {anime.title}
          </h3>
          <button
            onClick={toggleWishlist}
            className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <Bookmark
              className={`w-5 h-5 ${isInWishlist ? 'text-blue-600' : ''}`}
            />
          </button>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <span>{anime.type}</span>
          {anime.score && (
            <>
              <span className="mx-2">•</span>
              <span>{anime.score.toFixed(1)}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard; 