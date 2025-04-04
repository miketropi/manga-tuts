import { useState } from 'react';

const OptimizedImage = ({ src, alt, className, fallback = '/placeholder.svg' }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={error ? fallback : src}
        alt={alt}
        className={`w-full h-full object-cover ${loading ? 'invisible' : 'visible'}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default OptimizedImage; 