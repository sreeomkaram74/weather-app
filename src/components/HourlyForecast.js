import React from 'react';
//to display HOurlyForecast in the middle section
const HourlyForecast = ({ data }) => {
  return (
    <div className="hourly-forecast">
      <h2>Hourly Forecasts</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature (°C)</th>
            <th>Weather Icon</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hour) => (
            <tr key={hour.dt}>
              <td>{new Date(hour.dt * 1000).getHours()} AM</td>
              <td>{hour.main.temp}°C</td>
              <td>
                 {/* take icon from openWeather API */}
                <img
                  src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
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

export default HourlyForecast;
