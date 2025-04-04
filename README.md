# Manga Tuts

A modern web application for discovering and managing anime and manga using the Jikan API (MyAnimeList). Built with React, Vite, and Tailwind CSS.

## Demo

![Home Page](1.jpeg)
![Search Page](2.jpeg)
![Anime Details](3.jpeg)

## Features

- 🔍 Search anime and manga with real-time results
- 🎯 Advanced filtering by type, status, genre, and rating
- 💖 Wishlist management with local storage
- 📱 Responsive design for all devices
- 📊 Detailed information pages for each anime/manga

## Tech Stack

- ⚡ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🔄 [Zustand](https://github.com/pmndrs/zustand) - State management
- 🛣️ [React Router](https://reactrouter.com/) - Declarative routing for React
- 📡 [Axios](https://axios-http.com/) - Promise based HTTP client
- 🎯 [Jikan API](https://jikan.moe/) - Unofficial MyAnimeList API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/miketropi/manga-tuts.git
cd manga-tuts
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
manga-tuts/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── store/         # Zustand store
│   ├── utils/         # Utility functions
│   ├── hooks/         # Custom React hooks
│   └── assets/        # Static assets
├── public/            # Public assets
└── memory-bank/       # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Jikan API](https://jikan.moe/) for providing the anime/manga data
- [MyAnimeList](https://myanimelist.net/) for the source data
