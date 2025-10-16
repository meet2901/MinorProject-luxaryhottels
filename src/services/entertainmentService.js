import api from './api';
import { getNowPlayingMovies } from './tmdbService';

// Mock entertainment data - combine with TMDB for movies
export const getEntertainmentCategories = async () => {
  try {
    // Using DummyJSON API for real post data (free, no key required, 150+ posts)
    const response = await api.get('https://dummyjson.com/posts?limit=15');
    const posts = response.data.posts;

    // Transform posts into entertainment categories with meaningful names
    return posts.map((post, index) => ({
      id: post.id,
      name: `${post.title} Entertainment`,
      description: post.body.substring(0, 100) + '...',
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      activities: ["Live Music", "Cultural Shows", "Dance Performances", "Comedy Nights"]
    }));
  } catch (error) {
    console.error('Error fetching entertainment categories from DummyJSON API:', error);
    // Fallback to mock data
    return [
      {
        id: 1,
        name: "Live Music",
        description: "Enjoy live performances from talented musicians across various genres.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        activities: ["Jazz Nights", "Acoustic Sessions", "Rock Concerts", "Classical Music"]
      }
    ];
  }
};

export const getShows = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: 1,
        name: "Jazz Night with The Blue Notes",
        date: "Friday, March 15",
        description: "An intimate evening of smooth jazz featuring the renowned Blue Notes quartet.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "8:00 PM",
        price: "₹35",
        details: [
          { icon: "🕐", text: "2-hour show" },
          { icon: "🍸", text: "Drinks included" },
          { icon: "🎵", text: "Live performance" },
          { icon: "📍", text: "Sky Lounge" }
        ]
      },
      {
        id: 2,
        name: "Comedy Central Presents",
        date: "Saturday, March 16",
        description: "Hilarious stand-up comedy featuring three top comedians from Comedy Central.",
        image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "9:00 PM",
        price: "₹25",
        details: [
          { icon: "🕐", text: "90-minute show" },
          { icon: "🍺", text: "Bar service" },
          { icon: "🎤", text: "3 comedians" },
          { icon: "📍", text: "Garden Terrace" }
        ]
      },
      {
        id: 3,
        name: "Contemporary Dance Showcase",
        date: "Sunday, March 17",
        description: "Modern dance performances by the acclaimed City Dance Company.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "7:00 PM",
        price: "₹40",
        details: [
          { icon: "🕐", text: "75-minute show" },
          { icon: "🍷", text: "Wine reception" },
          { icon: "💃", text: "5 performances" },
          { icon: "📍", text: "Grand Ballroom" }
        ]
      }
    ];
  } catch (error) {
    console.error('Error fetching shows:', error);
    return [];
  }
};

export const getMovies = async () => {
  return await getNowPlayingMovies();
};

export const getActivities = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        icon: "🎨",
        name: "Art Workshop",
        description: "Learn painting and drawing techniques from professional artists.",
        duration: "2 hours"
      },
      {
        icon: "🍳",
        name: "Cooking Class",
        description: "Master the art of Italian cuisine with our expert chefs.",
        duration: "3 hours"
      },
      {
        icon: "🎵",
        name: "Music Jam Session",
        description: "Join fellow musicians for an impromptu jam session.",
        duration: "1.5 hours"
      },
      {
        icon: "🧘",
        name: "Yoga Session",
        description: "Relax and rejuvenate with guided yoga and meditation.",
        duration: "1 hour"
      }
    ];
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
};

export const getWeeklySchedule = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        day: "Monday",
        events: [
          { time: "7:00 PM", name: "Jazz Night" },
          { time: "9:00 PM", name: "Comedy Show" }
        ]
      },
      {
        day: "Tuesday",
        events: [
          { time: "8:00 PM", name: "Dance Performance" },
          { time: "10:00 PM", name: "Live Music" }
        ]
      },
      {
        day: "Wednesday",
        events: [
          { time: "6:00 PM", name: "Wine Tasting" },
          { time: "8:00 PM", name: "Theater Play" }
        ]
      },
      {
        day: "Thursday",
        events: [
          { time: "7:00 PM", name: "Karaoke Night" },
          { time: "9:00 PM", name: "Trivia Night" }
        ]
      },
      {
        day: "Friday",
        events: [
          { time: "8:00 PM", name: "Rock Concert" },
          { time: "10:00 PM", name: "DJ Night" }
        ]
      },
      {
        day: "Saturday",
        events: [
          { time: "7:00 PM", name: "Broadway Show" },
          { time: "9:00 PM", name: "Magic Show" }
        ]
      },
      {
        day: "Sunday",
        events: [
          { time: "6:00 PM", name: "Family Movie Night" },
          { time: "8:00 PM", name: "Acoustic Music" }
        ]
      }
    ];
  } catch (error) {
    console.error('Error fetching weekly schedule:', error);
    return [];
  }
};

export const getEntertainmentData = async () => {
  try {
    const [categories, shows, activities, schedule] = await Promise.all([
      getEntertainmentCategories(),
      getShows(),
      getActivities(),
      getWeeklySchedule()
    ]);
    return { categories, shows, activities, schedule };
  } catch (error) {
    console.error('Error fetching entertainment data:', error);
    return { categories: [], shows: [], activities: [], schedule: [] };
  }
};
