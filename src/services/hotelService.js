import api from './api';

// Fetch rooms from Rest Countries API (free, large data with real country names)
// Using countries as basis for hotel names
export const getRooms = async () => {
  try {
    // Using Rest Countries API for real country data (free, no key required)
    const response = await api.get('https://restcountries.com/v3.1/all');
    const countries = response.data.slice(0, 50); // Limit to 50 countries

    // Transform countries into hotel rooms
    return countries.map((country, index) => ({
      id: index + 1,
      name: `Grand Hotel ${country.name.common}`,
      type: index % 3 === 0 ? 'Standard' : index % 3 === 1 ? 'Suite' : 'Deluxe',
      description: `Luxury accommodation in ${country.name.common}, featuring premium amenities and stunning views.`,
      price: Math.floor(Math.random() * 400) + 150,
      capacity: Math.floor(Math.random() * 4) + 1,
      size: `${Math.floor(Math.random() * 600) + 250} sq ft`,
      amenities: ['wifi', 'breakfast', 'tv', 'ac', 'safe', 'pool', 'gym'],
      image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`,
      features: ['City View', 'Modern Amenities', 'Premium Service']
    }));
  } catch (error) {
    console.error('Error fetching rooms from Rest Countries API:', error);
    return getFallbackRooms();
  }
};

const getFallbackRooms = () => [
  {
    id: 1,
    name: 'Deluxe King Room',
    type: 'Standard',
    description: 'Spacious room with king-sized bed, work desk, and city view.',
    price: 199,
    capacity: 2,
    size: '350 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'safe'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['City View', 'Work Desk']
  },
  {
    id: 2,
    name: 'Executive Suite',
    type: 'Suite',
    description: 'Luxury suite with separate living area and premium amenities.',
    price: 349,
    capacity: 2,
    size: '650 sq ft',
    amenities: ['wifi', 'breakfast', 'minibar', 'spa', 'tv'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Separate Living Area', 'Premium Amenities']
  },
  {
    id: 3,
    name: 'Ocean View Deluxe',
    type: 'Deluxe',
    description: 'Stunning ocean views with private balcony and luxury furnishings.',
    price: 299,
    capacity: 2,
    size: '400 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'balcony', 'ocean-view'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Ocean View', 'Private Balcony']
  },
  {
    id: 4,
    name: 'Family Suite',
    type: 'Suite',
    description: 'Perfect for families with two bedrooms and connecting rooms.',
    price: 449,
    capacity: 4,
    size: '800 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'kitchen', 'pool'],
    image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Two Bedrooms', 'Family Friendly']
  },
  {
    id: 5,
    name: 'Business Room',
    type: 'Standard',
    description: 'Designed for business travelers with high-speed internet and workspace.',
    price: 229,
    capacity: 1,
    size: '300 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'workspace', 'printer'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Business Amenities', 'High-Speed Internet']
  },
  {
    id: 6,
    name: 'Penthouse Suite',
    type: 'Suite',
    description: 'Ultimate luxury with panoramic city views and private terrace.',
    price: 699,
    capacity: 2,
    size: '1200 sq ft',
    amenities: ['wifi', 'breakfast', 'minibar', 'spa', 'tv', 'jacuzzi', 'terrace'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Panoramic Views', 'Private Terrace']
  },
  {
    id: 7,
    name: 'Garden View Room',
    type: 'Standard',
    description: 'Peaceful room overlooking our beautiful garden and pool area.',
    price: 189,
    capacity: 2,
    size: '320 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'garden-view'],
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Garden View', 'Peaceful Environment']
  },
  {
    id: 8,
    name: 'Presidential Suite',
    type: 'Suite',
    description: 'The ultimate in luxury with multiple rooms and butler service.',
    price: 899,
    capacity: 4,
    size: '2000 sq ft',
    amenities: ['wifi', 'breakfast', 'minibar', 'spa', 'tv', 'jacuzzi', 'butler', 'dining'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Multiple Rooms', 'Butler Service']
  },
  {
    id: 9,
    name: 'Mountain View Cabin',
    type: 'Deluxe',
    description: 'Cozy cabin-style room with stunning mountain views.',
    price: 259,
    capacity: 2,
    size: '380 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'fireplace', 'mountain-view'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Mountain View', 'Cozy Fireplace']
  },
  {
    id: 10,
    name: 'Honeymoon Suite',
    type: 'Suite',
    description: 'Romantic suite with heart-shaped jacuzzi and champagne service.',
    price: 399,
    capacity: 2,
    size: '550 sq ft',
    amenities: ['wifi', 'breakfast', 'minibar', 'spa', 'tv', 'jacuzzi', 'champagne'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Romantic Ambiance', 'Jacuzzi']
  },
  {
    id: 11,
    name: 'Budget Single',
    type: 'Standard',
    description: 'Affordable single room perfect for solo travelers.',
    price: 99,
    capacity: 1,
    size: '250 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Budget Friendly', 'Solo Traveler']
  },
  {
    id: 12,
    name: 'Villa with Pool',
    type: 'Deluxe',
    description: 'Private villa with your own swimming pool and garden.',
    price: 599,
    capacity: 6,
    size: '1500 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'private-pool', 'kitchen', 'garden'],
    image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Private Pool', 'Villa Experience']
  },
  {
    id: 13,
    name: 'Art Deco Room',
    type: 'Deluxe',
    description: 'Stylish room with art deco design and modern amenities.',
    price: 279,
    capacity: 2,
    size: '360 sq ft',
    amenities: ['wifi', 'breakfast', 'tv', 'ac', 'art-deco'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Art Deco Design', 'Stylish']
  },
  {
    id: 14,
    name: 'Spa Retreat Suite',
    type: 'Suite',
    description: 'Relaxing suite with in-room spa facilities and wellness amenities.',
    price: 499,
    capacity: 2,
    size: '700 sq ft',
    amenities: ['wifi', 'breakfast', 'minibar', 'spa', 'tv', 'jacuzzi', 'wellness'],
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['In-Room Spa', 'Wellness Focused']
  }
];

export const getSpecialOffers = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: 1,
        title: 'Early Bird Discount',
        description: 'Book 30 days in advance and save 15% on your stay',
        discount: '15% OFF'
      },
      {
        id: 2,
        title: 'Weekend Getaway',
        description: 'Special rates for Friday and Saturday nights',
        discount: '20% OFF'
      },
      {
        id: 3,
        title: 'Family Package',
        description: 'Free breakfast for children under 12 when booking family rooms',
        discount: 'FREE BREAKFAST'
      }
    ];
  } catch (error) {
    console.error('Error fetching offers:', error);
    return [];
  }
};
