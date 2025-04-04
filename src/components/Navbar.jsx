import { Link, NavLink } from 'react-router-dom';
import { Home, Search, Bookmark, Moon, Sun, Menu, X, Github } from 'lucide-react';
import useThemeStore from '../stores/useThemeStore';
import { useState } from 'react';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all"
            >
              MangaTuts
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`
              }
            >
              <Home className="w-5 h-5 mr-2" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`
              }
            >
              <Search className="w-5 h-5 mr-2" />
              <span>Search</span>
            </NavLink>

            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`
              }
            >
              <Bookmark className="w-5 h-5 mr-2" />
              <span>Wishlist</span>
            </NavLink>

            <a
              href="https://github.com/miketropi/manga-tuts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60"
            >
              <Github className="w-5 h-5 mr-2" />
              <span>GitHub</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg py-3 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5 mr-3" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="w-5 h-5 mr-3" />
              <span>Search</span>
            </NavLink>

            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Bookmark className="w-5 h-5 mr-3" />
              <span>Wishlist</span>
            </NavLink>

            <a
              href="https://github.com/miketropi/manga-tuts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="w-5 h-5 mr-3" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;