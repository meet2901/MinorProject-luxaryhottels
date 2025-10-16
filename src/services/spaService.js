import api from './api';

// Mock spa data - in production, use wellness API
export const getSpaServices = async () => {
  try {
    // Using Makeup API for real beauty product data (free, no key required)
    const response = await api.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick');
    const products = response.data.slice(0, 8); // Limit to 8 products

    // Transform makeup products into spa services
    return products.map((product, index) => ({
      id: product.id || index + 1,
      name: product.name || `Spa Treatment ${index + 1}`,
      category: product.product_type || "Beauty Treatment",
      description: product.description || `Relaxing ${product.name} treatment for ultimate wellness.`,
      image: product.image_link || "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: `${Math.floor(Math.random() * 60) + 30} min`,
      price: product.price ? parseFloat(product.price) * 100 : Math.floor(Math.random() * 100) + 50,
      benefits: ["Relaxation", "Skin Care", "Wellness", "Rejuvenation"]
    }));
  } catch (error) {
    console.error('Error fetching spa services from Makeup API:', error);
    // Fallback to mock data
    return [
      {
        id: 1,
        name: "Swedish Massage",
        category: "Massage Therapy",
        description: "Relaxing full-body massage using long, flowing strokes to improve circulation and reduce stress.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "60 min",
        price: 120,
        benefits: ["Stress Relief", "Improved Circulation", "Muscle Relaxation", "Better Sleep"]
      }
    ];
  }
};

export const getFacilities = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        icon: "🏊",
        name: "Infinity Pool",
        description: "Heated infinity pool with panoramic views and hydrotherapy jets for ultimate relaxation."
      },
      {
        icon: "🧖",
        name: "Steam Room",
        description: "Traditional steam room with eucalyptus infusion for respiratory health and detoxification."
      },
      {
        icon: "❄️",
        name: "Ice Fountain",
        description: "Cold plunge pool and ice fountain for contrast therapy and improved circulation."
      },
      {
        icon: "🧘",
        name: "Meditation Garden",
        description: "Serene outdoor meditation space with zen gardens and peaceful water features."
      },
      {
        icon: "💆",
        name: "Treatment Rooms",
        description: "Private treatment rooms equipped with the latest spa technology and ambient lighting."
      },
      {
        icon: "🛀",
        name: "Hydrotherapy Bath",
        description: "Therapeutic baths with various jet configurations for targeted muscle relief."
      }
    ];
  } catch (error) {
    console.error('Error fetching facilities:', error);
    return [];
  }
};

export const getSpaPackages = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        icon: "🌸",
        name: "Ultimate Relaxation",
        description: "Full day of pampering including massage, facial, and access to all facilities",
        price: 299,
        duration: "4 hours",
        includes: ["60-min Massage", "Facial Treatment", "Lunch", "Pool Access"]
      },
      {
        icon: "💎",
        name: "Couples Retreat",
        description: "Romantic spa experience for couples with side-by-side treatments",
        price: 399,
        duration: "3 hours",
        includes: ["Couples Massage", "Champagne", "Chocolate", "Private Suite"]
      },
      {
        icon: "🌿",
        name: "Detox & Renew",
        description: "Cleansing treatments focused on detoxification and skin renewal",
        price: 199,
        duration: "2.5 hours",
        includes: ["Body Scrub", "Detox Wrap", "Herbal Tea", "Sauna Access"]
      }
    ];
  } catch (error) {
    console.error('Error fetching spa packages:', error);
    return [];
  }
};

export const getSpaData = async () => {
  try {
    const [spaServices, facilities, spaPackages] = await Promise.all([
      getSpaServices(),
      getFacilities(),
      getSpaPackages()
    ]);
    return { spaServices, facilities, spaPackages };
  } catch (error) {
    console.error('Error fetching spa data:', error);
    return { spaServices: [], facilities: [], spaPackages: [] };
  }
};
