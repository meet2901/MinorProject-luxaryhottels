import api from './api';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const getHotelImages = async (query = 'hotel room', count = 10) => {
  try {
    const response = await api.get(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${ACCESS_KEY}`
    );
    return response.data.results.map(img => ({
      id: img.id,
      src: img.urls.regular,
      alt: img.alt_description || 'Hotel image',
      category: query.replace(' ', '-')
    }));
  } catch (error) {
    console.error('Error fetching hotel images:', error);
    // Return fallback images
    return [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        alt: 'Hotel room',
        category: 'rooms'
      }
    ];
  }
};

export const getGalleryImages = async (categories = ['hotel', 'spa', 'dining', 'events', 'entertainment', 'rooms', 'luxury', 'resort']) => {
  const images = [];
  for (const category of categories) {
    const categoryImages = await getHotelImages(category, 10); // Increased to 10 images per category
    images.push(...categoryImages);
  }
  return images;
};
