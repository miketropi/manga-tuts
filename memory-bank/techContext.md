# Technical Context

## Technologies Used
1. **Core**
   - React 18
   - Vite
   - TypeScript
   - Tailwind CSS

2. **State Management**
   - Zustand
   - Persist middleware
   - Map for caching

3. **Routing**
   - React Router
   - Client-side routing
   - Route parameters

4. **Styling**
   - Tailwind CSS
   - Dark mode support
   - Responsive design

## Development Setup
1. **Build Tools**
   - Vite for development
   - TypeScript for type safety
   - ESLint for linting
   - Prettier for formatting

2. **Dependencies**
   - Axios for API calls
   - Lucide React for icons
   - React Hot Toast for notifications
   - Zustand for state management

3. **Configuration**
   - Tailwind config
   - TypeScript config
   - ESLint config
   - Vite config

## API Integration
1. **Jikan API**
   - RESTful endpoints
   - Rate limiting
   - Pagination support
   - Query parameters

2. **Data Management**
   - Cached responses
   - 5-minute cache duration
   - Separate caches
   - Timestamp invalidation

## Technical Constraints
1. **API Limitations**
   - Rate limiting
   - Response size
   - Pagination limits
   - Query complexity

2. **Performance**
   - Cache size limits
   - Memory usage
   - Network requests
   - Render performance

3. **Browser**
   - LocalStorage limits
   - Memory constraints
   - Network capabilities
   - Device capabilities

## Tool Usage Patterns
1. **Development**
   - Component-based development
   - Hook-based logic
   - Type-safe code
   - Responsive design

2. **Testing**
   - Component testing
   - State testing
   - API testing
   - Cache testing

3. **Debugging**
   - React DevTools
   - Browser DevTools
   - Network monitoring
   - Cache inspection

## Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.1",
    "axios": "^1.6.7",
    "lucide-react": "^0.330.0",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}
```

## Development Stack
1. Core Technologies
   - Vite React JavaScript
   - React Router v6
   - Tailwind CSS
   - Zustand + immer
   - Jikan API v4

2. Development Tools
   - Node.js
   - npm/yarn
   - Git version control
   - ESLint/Prettier

## Technical Constraints
1. API Limitations
   - Jikan API rate limits
   - CORS policies
   - Response size limits

2. Browser Support
   - Modern browser compatibility
   - Mobile device support
   - Local storage availability

3. Performance Considerations
   - Bundle size optimization
   - API request optimization
   - State management efficiency

## Dependencies
1. Core Dependencies
   - react
   - react-dom
   - react-router-dom
   - zustand
   - immer
   - tailwindcss

2. Development Dependencies
   - @vitejs/plugin-react
   - eslint
   - prettier
   - typescript (optional)

## Development Setup
1. Environment Requirements
   - Node.js >= 16
   - Modern web browser
   - Code editor with ESLint support

2. Project Structure
   - src/
     - components/
     - pages/
     - hooks/
     - store/
     - utils/
     - assets/
   - public/
   - config/ 