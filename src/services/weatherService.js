import api from './api';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeather = async (city = 'New York') => {
  try {
    const response = await api.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return {
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    // Return sample weather
    return {
      city: 'New York',
      temperature: 22,
      description: 'Clear sky',
      icon: '01d',
      humidity: 60,
      windSpeed: 5
    };
  }
};
