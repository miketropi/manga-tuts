import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Search from './pages/Search'
import Detail from './pages/Detail'
import useThemeStore from './stores/useThemeStore'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

const App = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <ErrorBoundary>
      <Router>
        <div className="font-mono min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/anime/:id" element={<Detail />} />
            </Routes>
          </main>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'dark:bg-gray-800 dark:text-white',
              style: {
                background: isDarkMode ? '#1f2937' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#000000',
              },
            }}
          />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
