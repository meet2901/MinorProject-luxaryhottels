import api from './api';

// Mock dining data - in production, use Yelp API or similar
export const getRestaurants = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
      {
        id: 1,
        name: "The Grand Dining Room",
        cuisine: "Fine Dining",
        description: "Experience culinary excellence in our elegant main dining room featuring contemporary cuisine with a focus on local ingredients.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        hours: "6:00 PM - 10:00 PM",
        dressCode: "Smart Casual",
        capacity: "120 guests"
      },
      {
        id: 2,
        name: "Garden Terrace",
        cuisine: "Mediterranean",
        description: "Al fresco dining under the stars featuring fresh Mediterranean cuisine and an extensive wine selection.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        hours: "12:00 PM - 11:00 PM",
        dressCode: "Casual",
        capacity: "80 guests"
      },
      {
        id: 3,
        name: "Sky Lounge",
        cuisine: "Asian Fusion",
        description: "Modern rooftop dining with panoramic city views and innovative Asian-inspired dishes.",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        hours: "5:00 PM - 12:00 AM",
        dressCode: "Smart Casual",
        capacity: "60 guests"
      }
    ];
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return [];
  }
};

export const getMenuCategories = async () => {
  try {
    // Using TheMealDB API for real recipe data (free, no key required)
    const response = await api.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = response.data.categories.slice(0, 6); // Limit to 6 categories

    // For each category, get some meals
    const categoriesWithItems = await Promise.all(
      categories.map(async (category) => {
        try {
          const mealsResponse = await api.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
          const meals = mealsResponse.data.meals.slice(0, 3); // 3 items per category

          const items = meals.map(meal => ({
            name: meal.strMeal,
            description: `${meal.strMeal} - A delicious ${category.strCategory.toLowerCase()} dish`,
            price: `₹${Math.floor(Math.random() * 20) + 15}` // Random price
          }));

          return {
            name: category.strCategory,
            icon: getCategoryIcon(category.strCategory),
            items: items
          };
        } catch (err) {
          console.error(`Error fetching meals for ${category.strCategory}:`, err);
          return {
            name: category.strCategory,
            icon: getCategoryIcon(category.strCategory),
            items: []
          };
        }
      })
    );

    return categoriesWithItems;
  } catch (error) {
    console.error('Error fetching menu from TheMealDB:', error);
    // Fallback to mock data
    return [
      {
        name: "Appetizers",
        icon: "🥗",
        items: [
          { name: "Seared Scallops", description: "Pan-seared diver scallops with cauliflower purée", price: "₹24" },
          { name: "Burrata Salad", description: "Fresh burrata with heirloom tomatoes and basil oil", price: "₹18" }
        ]
      }
    ];
  }
};

// Helper function to get icons for categories
const getCategoryIcon = (category) => {
  const icons = {
    'Beef': '🥩',
    'Chicken': '🍗',
    'Dessert': '🍰',
    'Lamb': '🍖',
    'Miscellaneous': '🍽️',
    'Pasta': '🍝',
    'Pork': '🥓',
    'Seafood': '🐟',
    'Side': '🥗',
    'Starter': '🥗',
    'Vegan': '🥬',
    'Vegetarian': '🥕',
    'Breakfast': '🥞',
    'Goat': '🐐'
  };
  return icons[category] || '🍽️';
};

export const getSpecialOffers = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        icon: "🍾",
        title: "Wine Tasting Dinner",
        description: "Four-course dinner paired with premium wines from our cellar",
        discount: "₹89 per person"
      },
      {
        icon: "🎉",
        title: "Anniversary Special",
        description: "Complimentary champagne and dessert for anniversary celebrations",
        discount: "FREE"
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Family Sunday Brunch",
        description: "Special family pricing with kids menu and entertainment",
        discount: "25% OFF"
      }
    ];
  } catch (error) {
    console.error('Error fetching special offers:', error);
    return [];
  }
};

export const getDiningData = async () => {
  try {
    const [restaurants, menuCategories, specialOffers] = await Promise.all([
      getRestaurants(),
      getMenuCategories(),
      getSpecialOffers()
    ]);
    return { restaurants, menuCategories, specialOffers };
  } catch (error) {
    console.error('Error fetching dining data:', error);
    return { restaurants: [], menuCategories: [], specialOffers: [] };
  }
};
