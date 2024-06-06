import React from 'react';
//to display DailyForecast in the middle section
const DailyForecast = ({ data }) => {
  return (
    <div className="daily-forecast">
      <h2>Daily Forecasts</h2>
      <table>
        <thead>
          <tr>
            <th>High (°C)</th>
            <th>Date</th>
            <th>Low (°C)</th>
            <th>Weather Icon</th>
          </tr>
        </thead>
        <tbody>
          {data.map((day) => (
            <tr key={day.dt}>
              <td>{new Date(day.dt * 1000).toLocaleDateString()}</td>
              <td>{day.main.temp_max}°C</td>
              <td>{day.main.temp_min}°C</td>
              <td>
                 {/* take icon from openWeather API */}
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyForecast;
