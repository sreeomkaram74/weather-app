import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import Tips from './components/Tips';
import './App.css';
// openweather API integration using API key
const API_KEY = 'e365296f6424c571675b7f6ca108d39e';
const LOCATION = 'Hyderabad,IN';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // use the Location and API key to get the currentWeather 
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${API_KEY}`
        );
        setCurrentWeather(currentWeatherResponse.data);
        //get the forecast weather data
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${LOCATION}&units=metric&appid=${API_KEY}`
        );
        //break the weather data into hourly and daily
        setHourlyForecast(forecastResponse.data.list.slice(0, 8)); // next 8 hours
        setDailyForecast(forecastResponse.data.list.filter((item, index) => index % 8 === 0).slice(0, 5)); // next 5 days
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <div className="forecast-section">
        <HourlyForecast data={hourlyForecast} />
        <DailyForecast data={dailyForecast} />
      </div>
      <Tips />
    </div>
  );
}

export default App;
