// weather.js - Fetch and display Cancun, Mexico weather

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '672a18bc60d7a5e8216c84a28f8ff6c6'; // replace with your API key
    const lat = 21.1619;  // Cancun latitude
    const lon = -86.8515; // Cancun longitude
    const weatherDiv = document.getElementById('weather');
  
    // Build API URL (metric units—Celsius)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
        weatherDiv.innerHTML = `
          <div class="weather-widget">
            <img src="${iconUrl}" alt="${desc}" width="40" height="40" />
            <span class="weather-temp">${temp}°C</span>
            <span class="weather-desc">${desc}</span>
          </div>
        `;
      })
      .catch(err => {
        console.error('Weather fetch error:', err);
        weatherDiv.textContent = 'Weather unavailable';
      });
  });
  