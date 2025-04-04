import { Component } from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

class DetailErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by detail boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Error Loading Anime Details
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              We couldn't load the details for this anime. The anime might not exist or there might be a temporary issue.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => this.props.navigate(-1)}
                className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapper component to provide navigate function
const DetailErrorBoundaryWrapper = (props) => {
  const navigate = useNavigate();
  return <DetailErrorBoundary {...props} navigate={navigate} />;
};

export default DetailErrorBoundaryWrapper; 