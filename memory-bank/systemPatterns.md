# System Patterns

## Architecture
1. **Component Structure**
   - Functional components with hooks
   - Error boundaries for error handling
   - OptimizedImage for image loading
   - Theme-aware components

2. **State Management**
   - Centralized state with Zustand
   - Separate stores for different concerns
   - Persisted state for user preferences
   - Cache state for performance optimization

3. **Data Flow**
   - Unidirectional data flow
   - Centralized API calls
   - Cached responses
   - Debounced search

## Design Patterns
1. **Component Patterns**
   - Container/Presenter pattern
   - Higher-Order Components
   - Error Boundary pattern
   - Optimized Image pattern

2. **State Patterns**
   - Store pattern with Zustand
   - Cache pattern with Map
   - Persistence pattern
   - Debounce pattern

3. **API Patterns**
   - Centralized API calls
   - Cached responses
   - Error handling
   - Rate limiting

## Key Implementation Paths
1. **Search Flow**
   - User input → Debounced search → Cache check → API call → Cache update → UI update

2. **Detail Flow**
   - Route change → Cache check → API call → Cache update → UI update

3. **Theme Flow**
   - Theme toggle → Store update → Persistence → UI update

4. **Cache Flow**
   - Data request → Cache check → Cache hit/miss → API call → Cache update → UI update

## Component Relationships
1. **Core Components**
   - App → Router → Pages
   - Pages → Components
   - Components → Store
   - Store → Cache

2. **Data Flow**
   - API → Store → Cache → Components
   - User Input → Components → Store → API
   - Theme → Store → Components

## Critical Implementation Details
1. **Cache Implementation**
   - Map-based storage
   - 5-minute cache duration
   - Separate caches for search and details
   - Timestamp-based invalidation

2. **State Management**
   - Zustand stores
   - Persisted preferences
   - Cache state
   - Loading states

3. **Error Handling**
   - Error boundaries
   - API error handling
   - Cache error handling
   - User feedback 