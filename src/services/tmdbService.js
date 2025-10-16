import api from './api';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNowPlayingMovies = async () => {
  try {
    const response = await api.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results.slice(0, 6).map(movie => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: movie.vote_average,
      releaseDate: movie.release_date
    }));
  } catch (error) {
    console.error('Error fetching movies:', error);
    // Return sample movies
    return [
      {
        id: 1,
        title: 'Sample Movie 1',
        description: 'A great movie to watch.',
        image: 'https://via.placeholder.com/300x450',
        rating: 8.5,
        releaseDate: '2023-01-01'
      }
    ];
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await api.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};
