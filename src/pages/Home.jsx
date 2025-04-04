import { Link } from 'react-router-dom';
import useThemeStore from '../stores/useThemeStore';
import { Film, BookOpen, Star } from 'lucide-react';

const Home = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Welcome to Manga Tuts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your ultimate destination for exploring anime and manga
          </p>
          <div className="space-x-4">
            <Link
              to="/search"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Exploring
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-xl mb-4 flex items-center justify-center">
                <Film className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Popular Anime
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover trending anime series and movies
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40 rounded-xl mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Latest Manga
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore new manga releases and updates
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-xl mb-4 flex items-center justify-center">
                <Star className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Top Picks
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Curated recommendations just for you
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home; 