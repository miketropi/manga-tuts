## Overview

Build a web app to manage anime/manga using the Jikan API (a public API for MyAnimeList). The app should allow users to search, filter, add items to a wishlist, and view detailed information.

## Core Requirements

1. Search & Display Results

Search bar for anime/manga by keyword.
Display results in a grid/list format (image, title, rating, type, episodes).
Implement pagination/infinite scroll (if supported by the API).

2. Filter System

Filter by:
Type: TV, Movie, OVA, Manga, etc.
Status: Airing/Completed.
Genre: Action, Romance, Comedy, etc.
Rating: PG-13, R+, etc.

3. Wishlist Feature

“Add to Wishlist” button for each item.
Dedicated “My Wishlist” page:
Display saved items.
Remove items from the wishlist.
Store data using localStorage or state management.

4. Detail Page

Clicking an item navigates to a detail page:
Show full information (synopsis, trailer, characters, studios).
Responsive design (mobile-friendly).

## Suggested Tech Stack

Frontend Framework: Vite React Javascript
State Management: Zustand + immer.
Styling: Tailwind CSS
Routing: React Router.
API Handling: Fetch API.

## Technical Requirements

Use Jikan API v4.
Client-side rendering (no backend required).
Responsive across all devices.
Clean code and reusable components.

## Implementation Steps

Project Setup: Initialize a project with your chosen framework.
API Integration: Fetch data from Jikan API (e.g., /anime, /manga, /search).
Search & Filter:
Combine search and filter parameters in API requests (e.g., ?q=One Piece&type=tv&status=complete).
Add debouncing to the search input for performance optimization.
Wishlist System:
Use localStorage to store item IDs.
Prevent duplicate entries in the wishlist.
Detail Page: Implement dynamic routing (e.g., /anime/:id).
Testing: Handle edge cases (empty states, API errors).


## Bonus Challenges

Dark mode toggle.
Compare two anime/manga.
Page transition or wishlist animation.
Unit testing (Jest/Vitest).
Deploy to Vercel.

## Example API Endpoints

javascript

// Search anime

fetch('https://api.jikan.moe/v4/anime?q=naruto&type=tv')// Get anime details by ID

fetch('https://api.jikan.moe/v4/anime/20')

// Filter anime by genre
fetch('https://api.jikan.moe/v4/anime?genres=1&order_by=popularity')

## Solution Tips

Use useState and useEffect (React) for data flow.
Include icons via libraries like Lucide React Icon.

## Evaluation Criteria:

Core features completed.
Smooth UX/UI design.
Clean, maintainable code structure.