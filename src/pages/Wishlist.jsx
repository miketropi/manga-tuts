import { Bookmark, BookOpen, Search } from 'lucide-react';
import useAnimeStore from '../stores/useAnimeStore';
import AnimeCard from '../components/AnimeCard';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist } = useAnimeStore();

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex items-center gap-3">
          <Bookmark className="w-8 h-8 text-white" />
          <h1 className="text-3xl font-bold text-white font-mono">My Wishlist</h1>
        </div>
        <p className="text-indigo-100 mt-2 ml-11">Keep track of anime you want to watch</p>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-indigo-100 dark:border-indigo-900/30">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Your wishlist is empty</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover and save your favorite anime to watch later
          </p>
          <Link 
            to="/search" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-md"
          >
            <Search className="w-5 h-5 mr-2" />
            Find Anime
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;