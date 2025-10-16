import api from './api';

export const getProducts = async (limit = 10) => {
  try {
    const response = await api.get(`https://fakestoreapi.com/products?limit=${limit}`);
    return response.data.map(product => ({
      id: product.id,
      name: product.title,
      description: product.description,
      price: `₹${product.price}`,
      image: product.image,
      category: product.category
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return sample products as fallback
    return [
      { id: 1, name: 'Hotel Branded T-Shirt', description: 'Comfortable cotton t-shirt with hotel logo.', price: '₹25', image: '' },
      { id: 2, name: 'Luxury Bath Set', description: 'Premium toiletries and bath amenities.', price: '₹45', image: '' },
      { id: 3, name: 'Souvenir Mug', description: 'Ceramic mug with hotel design.', price: '₹15', image: '' },
      { id: 4, name: 'Gift Card', description: 'Perfect gift for any occasion.', price: '₹50', image: '' },
    ];
  }
};
