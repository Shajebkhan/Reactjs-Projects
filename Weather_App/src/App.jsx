
import { useState } from "react";
import './App.css';
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const key = '084dc73f85684ea6bde102655250502'
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
    const data = await response.json();
    setWeather(data);
    console.log(data)
    setCity("");
  }
  

  return (
    <>
      <div>
        <h1> Weather Api</h1>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City Name" />
        <br />
        <button onClick={fetchWeather}>Get Weather</button>

        <div>
          {weather && (
            <div>
              <h2>Weather in {weather.location.name}</h2>
              <h3> Temprature : {weather.current.temp_c}°C</h3>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
