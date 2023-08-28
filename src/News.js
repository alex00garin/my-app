import React, { useEffect, useState } from 'react';
import Clock from './Clock';

const News = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(); // Fetch weather data when the component mounts
  }, []);

  const fetchWeatherData = async () => {
    try {
      const apiKey = 'YOUR_API_KEY';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData(data); // Store the weather data in state
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    
    <div>
      <div>
        <Clock />
      </div>
      {weatherData && weatherData.main && weatherData.weather ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Render other weather details */}
        </div>
      ) : (
        <p>Loading weather data...
            <br></br>
        Loading news data...</p>
        
      )}
      
      </div>
  );
};

export default News;
