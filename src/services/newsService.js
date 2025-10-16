import api from './api';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getHotelNews = async () => {
  try {
    const response = await api.get(
      `https://newsapi.org/v2/everything?q=hotel+industry&apiKey=${API_KEY}&pageSize=5&sortBy=publishedAt`
    );
    return response.data.articles.map(article => ({
      id: article.url,
      title: article.title,
      description: article.description,
      image: article.urlToImage,
      url: article.url,
      publishedAt: article.publishedAt
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    // Return sample news
    return [
      {
        id: 1,
        title: 'Hotel Industry Trends 2024',
        description: 'Latest trends in the hospitality industry.',
        image: 'https://via.placeholder.com/400x200',
        url: '#',
        publishedAt: new Date().toISOString()
      }
    ];
  }
};
