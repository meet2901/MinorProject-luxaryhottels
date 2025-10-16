// Mock travel services data - in production, use travel APIs
export const getTravelServices = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      {
        id: 1,
        name: "Airport Transfer",
        type: "Transportation",
        description: "Comfortable and reliable airport pickup and drop-off service with professional drivers.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        features: [
          { icon: "🚗", text: "Luxury vehicles" },
          { icon: "👨‍✈️", text: "Professional drivers" },
          { icon: "📱", text: "Real-time tracking" },
          { icon: "🛄", text: "Luggage assistance" }
        ],
        price: "Starting at ₹50"
      },
      {
        id: 2,
        name: "City Tours",
        type: "Sightseeing",
        description: "Guided tours of the city's most famous landmarks and hidden gems with expert local guides.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        features: [
          { icon: "🗺️", text: "Expert guides" },
          { icon: "📸", text: "Photo stops" },
          { icon: "🍽️", text: "Local cuisine" },
          { icon: "🎟️", text: "Skip-the-line access" }
        ],
        price: "Starting at ₹75"
      },
      {
        id: 3,
        name: "Car Rental",
        type: "Transportation",
        description: "Premium car rental service with a wide selection of vehicles from economy to luxury.",
        image: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        features: [
          { icon: "🚙", text: "Wide selection" },
          { icon: "⛽", text: "Full insurance" },
          { icon: "🗺️", text: "GPS navigation" },
          { icon: "🛡️", text: "24/7 support" }
        ],
        price: "Starting at ₹35/day"
      },
      {
        id: 4,
        name: "Travel Insurance",
        type: "Insurance",
        description: "Comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        features: [
          { icon: "🛡️", text: "Medical coverage" },
          { icon: "✈️", text: "Trip protection" },
          { icon: "🛄", text: "Lost luggage" },
          { icon: "📞", text: "24/7 assistance" }
        ],
        price: "Starting at ₹25"
      }
    ];
  } catch (error) {
    console.error('Error fetching travel services:', error);
    return [];
  }
};

export const getDestinations = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        name: "Historic Downtown",
        description: "Explore the rich history and architecture of our city's historic downtown district.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        highlights: ["Historic Buildings", "Museums", "Shopping", "Dining", "Architecture Tours"]
      },
      {
        name: "Waterfront District",
        description: "Stroll along the scenic waterfront with beautiful views and fresh seafood restaurants.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        highlights: ["Harbor Views", "Seafood", "Parks", "Boat Tours", "Sunset Watching"]
      },
      {
        name: "Cultural Quarter",
        description: "Immerse yourself in the local arts and culture scene with galleries and theaters.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        highlights: ["Art Galleries", "Theaters", "Live Music", "Festivals", "Street Art"]
      }
    ];
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return [];
  }
};

export const getTravelPackages = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        icon: "🏙️",
        name: "City Explorer Package",
        description: "Complete city exploration package with airport transfer, guided tours, and premium experiences",
        price: 299,
        duration: "3 days",
        includes: ["Airport Transfer", "City Tour", "Museum Tickets", "Local Dining", "Hotel Booking"]
      },
      {
        icon: "🏖️",
        name: "Beach Getaway Package",
        description: "Relaxing beach vacation with transportation, accommodation, and leisure activities",
        price: 499,
        duration: "5 days",
        includes: ["Airport Transfer", "Beach Resort", "Spa Treatment", "Water Sports", "Meals Included"]
      },
      {
        icon: "🎭",
        name: "Cultural Experience Package",
        description: "Immersive cultural experience with guided tours, shows, and authentic local experiences",
        price: 399,
        duration: "4 days",
        includes: ["Cultural Tours", "Show Tickets", "Local Workshops", "Traditional Dining", "Expert Guides"]
      }
    ];
  } catch (error) {
    console.error('Error fetching travel packages:', error);
    return [];
  }
};

export const getTravelData = async () => {
  try {
    const [travelServices, destinations, travelPackages] = await Promise.all([
      getTravelServices(),
      getDestinations(),
      getTravelPackages()
    ]);
    return { travelServices, destinations, travelPackages };
  } catch (error) {
    console.error('Error fetching travel data:', error);
    return { travelServices: [], destinations: [], travelPackages: [] };
  }
};
