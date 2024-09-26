
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';



function App() {
  const [weather, setWeather] = useState(null); // Initialize as null

// City data with latitude and longitude
const cities = [
  { name: 'Karachi', lat: 24.8607, lon: 67.0011 },
  { name: 'Lahore', lat: 31.5497, lon: 74.3436 },
  { name: 'Islamabad', lat: 33.6844, lon: 73.0479 },
  { name: 'Hyderabad', lat: 25.3960, lon: 68.3578 },
  { name: 'Multan', lat: 30.1575, lon: 71.5249 },
  { name: 'Peshawar', lat: 34.0151, lon: 71.5249 },
  { name: 'Quetta', lat: 30.1798, lon: 66.9750 },
  { name: 'Gujranwala', lat: 32.1613, lon: 74.1880 },
  { name: 'Faisalabad', lat: 31.4504, lon: 74.1976 },
  { name: 'Rawalpindi', lat: 33.6007, lon: 72.6778 },
  { name: 'Sialkot', lat: 32.5099, lon: 74.5480 },
  { name: 'Bahawalpur', lat: 29.3983, lon: 71.6614 },
  { name: 'Larkana', lat: 27.5570, lon: 68.2145 },
  { name: 'Dera Ghazi Khan', lat: 30.0459, lon: 70.6345 },
  { name: 'Mardan', lat: 34.1971, lon: 72.0460 },
  { name: 'Attock', lat: 33.7381, lon: 72.3682 },
  { name: 'Sheikhupura', lat: 31.7131, lon: 73.9783 },
  { name: 'Nawabshah', lat: 26.1957, lon: 68.4097 },
  { name: 'Mirpur Khas', lat: 25.5208, lon: 69.0189 },
  { name: 'Kasur', lat: 31.0927, lon: 74.3948 },
  { name: 'Okara', lat: 30.8104, lon: 73.4444 },
];


  function searchCity(selectedCityByUser)
  {
   console.log('you search the cit :', selectedCityByUser.target.value);
   cities.forEach(function(data,index){
     if(data.name == selectedCityByUser.target.value){
      weatherFetchingFunction(data.lat, data.lon)
     console.log(data);
     console.log(data.lat);
     console.log(data.lon);
     }
   })
 }

 async function weatherFetchingFunction(lat, lon) 
 {
  // console.log(lat); console.log(lon);
   try {
    console.log('Weather Forecast App');
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c153479685c47f1b34a83591f3b1acbe`
    );
    setWeather(response.data); // Set the actual weather data
    console.log(response.data);
   } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Failed to fetch weather data. Please try again later.');
   }
  }
   
  // useEffect(() => {
  //   async function weatherFetchingFunction() {
  //     try {
  //       console.log('Weather Forecast App');
  //       const response = await axios.get(
  //         'https://api.openweathermap.org/data/2.5/weather?lat=24.8607&lon=67.0011&appid=c153479685c47f1b34a83591f3b1acbe'
  //       );
  //       setWeather(response.data); // Set the actual weather data
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching weather data:', error);
  //       alert('Failed to fetch weather data. Please try again later.');
  //     }
  //   }
  //   weatherFetchingFunction();
  // }, [search]);

  return (
    <>
      <h1>Weather Forecast App</h1>
      <h3>Vite + React + Ant-Design</h3>

      <div className='images'>
       
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://ant.design/" target="_blank">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFMkgc-3Ic_ulT8KOXJCkvQeLLUlgo9TpOg&s'} className="logo react" alt="Antd logo" />
        </a>

      </div>
      
      <select onChange={(t) => { searchCity(t) }}>
       <option value="" disabled selected>Select city</option>
       {cities.map((data, index) => (<option value={data.name}>{data.name}</option>))}
      </select>
 
      <div className="card">
        {weather ? (
          <>
            <h2>Weather in {weather.name}</h2>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </>
        ) : (
          <h2>Select City</h2> // Show loading message while fetching data
        )}
      </div>
    </>
  );
}

export default App;
