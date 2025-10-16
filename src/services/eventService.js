import api from './api';

// Mock events data - in production, use Eventbrite API or similar
export const getEvents = async () => {
  try {
    // Using DummyJSON API for real post data (free, no key required, 150+ posts)
    const response = await api.get('https://dummyjson.com/posts?limit=20');
    const posts = response.data.posts;

    // Transform posts into event types with meaningful names
    return posts.map((post, index) => ({
      id: post.id,
      name: `${post.title} Event`,
      type: index % 3 === 0 ? 'Wedding' : index % 3 === 1 ? 'Business' : 'Celebration',
      description: post.body.substring(0, 150) + '...',
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      capacity: `${Math.floor(Math.random() * 250) + 50}-${Math.floor(Math.random() * 300) + 100} guests`,
      features: [
        { icon: "💒", text: "Ceremony Setup" },
        { icon: "🍾", text: "Champagne Toast" },
        { icon: "🎵", text: "Live Music" },
        { icon: "📸", text: "Photography" }
      ]
    }));
  } catch (error) {
    console.error('Error fetching events from DummyJSON API:', error);
    // Fallback to mock data
    return [
      {
        id: 1,
        name: "Wedding Celebrations",
        type: "Wedding",
        description: "Create magical memories with our comprehensive wedding packages.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        capacity: "50-300 guests",
        features: [
          { icon: "💒", text: "Ceremony Setup" },
          { icon: "🍾", text: "Champagne Toast" },
          { icon: "🎵", text: "Live Music" },
          { icon: "📸", text: "Photography" }
        ]
      }
    ];
  }
};

export const getVenues = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: 1,
        name: "Grand Ballroom",
        description: "Elegant ballroom with crystal chandeliers and marble floors, perfect for large celebrations and formal events.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        size: "5,000 sq ft",
        amenities: ["Crystal Chandeliers", "Marble Floors", "Stage", "Dance Floor", "Bridal Suite", "AV System"]
      },
      {
        id: 2,
        name: "Garden Terrace",
        description: "Beautiful outdoor venue with garden views, ideal for romantic ceremonies and cocktail receptions.",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        size: "2,500 sq ft",
        amenities: ["Garden Views", "Natural Light", "Outdoor Setting", "Fountain", "String Lights", "Weather Backup"]
      },
      {
        id: 3,
        name: "Executive Boardroom",
        description: "Professional meeting space with modern technology and comfortable seating for business presentations.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        size: "800 sq ft",
        amenities: ["Video Conferencing", "Whiteboard", "Coffee Service", "High-Speed WiFi", "Presentation Screen", "Sound System"]
      }
    ];
  } catch (error) {
    console.error('Error fetching venues:', error);
    return [];
  }
};

export const getEventServices = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        icon: "🎤",
        name: "Entertainment",
        description: "Professional DJs, live bands, and performers for your special event",
        price: "Starting at ₹500"
      },
      {
        icon: "📸",
        name: "Photography",
        description: "Professional photography and videography services to capture your memories",
        price: "Starting at ₹300"
      },
      {
        icon: "🍽️",
        name: "Catering",
        description: "Delicious catering options from our award-winning culinary team",
        price: "Starting at ₹50/person"
      },
      {
        icon: "🎨",
        name: "Decorations",
        description: "Beautiful floral arrangements and themed decorations",
        price: "Starting at ₹200"
      }
    ];
  } catch (error) {
    console.error('Error fetching event services:', error);
    return [];
  }
};

export const getEventPackages = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        icon: "💒",
        name: "Complete Wedding Package",
        description: "Everything you need for your perfect wedding day, from ceremony to reception",
        price: 2500,
        includes: ["Venue Rental", "Catering", "Photography", "DJ", "Decorations", "Wedding Cake"]
      },
      {
        icon: "💼",
        name: "Corporate Meeting Package",
        description: "Professional setup for business meetings and conferences",
        price: 800,
        includes: ["Meeting Room", "AV Equipment", "Coffee Service", "Lunch", "Notebooks", "Parking"]
      },
      {
        icon: "🎉",
        name: "Birthday Celebration Package",
        description: "Fun-filled birthday party with entertainment and decorations",
        price: 600,
        includes: ["Party Room", "Entertainment", "Birthday Cake", "Decorations", "Party Favors", "Games"]
      }
    ];
  } catch (error) {
    console.error('Error fetching event packages:', error);
    return [];
  }
};

export const getEventsData = async () => {
  try {
    const [eventTypes, venues, eventServices, eventPackages] = await Promise.all([
      getEvents(),
      getVenues(),
      getEventServices(),
      getEventPackages()
    ]);
    return { eventTypes, venues, eventServices, eventPackages };
  } catch (error) {
    console.error('Error fetching events data:', error);
    return { eventTypes: [], venues: [], eventServices: [], eventPackages: [] };
  }
};
