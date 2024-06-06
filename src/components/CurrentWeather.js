import React from 'react';
// to display currentWeather details in the top section
const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <div>Temperature: {data.main.temp}°C</div>
      <div>Humidity: {data.main.humidity}%</div>
      <div>Wind Speed: {data.wind.speed} km/h</div>
      {/* take icon from openWeather API */}
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default CurrentWeather;
