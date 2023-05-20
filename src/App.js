import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  let [lon, lat] = [77.2219388, 28.6517178];
  const [day, setDay] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState('');


  function handleClick(e) {
    getWeatherData(cityName);
    e.preventDefault();
    setCityName("");
  }

  function getDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    setDay(date.toLocaleDateString('en-IN', options));
  }

  useEffect(() => {
    getDate();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=28.6517&lon=77.2219&appid=973d4d8415230270ae88e8c16d168146`)
      .then((res) => {
        console.log(res.data);
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  function getWeatherData(City) {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${City}&appid=973d4d8415230270ae88e8c16d168146`)
      .then((resp) => {
        lat = resp.data[0].lat;
        lon = resp.data[0].lon;
      })
      .then(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=973d4d8415230270ae88e8c16d168146`)
          .then((res) => {
            setWeatherData(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div className="w-full h-[100vh] overflow-clip">
      <img src="backgroundImg.jpg" alt="scenery" className="absolute -z-20 h-[100vh] w-full" />
      <nav className="text-center bg-[#224b8b] text-4xl py-4 text-white">Weather App</nav>
      <div className="flex justify-center items-center relatiuve">
        <div className="w-1/2 h-[100vh] pl-10 pt-10">
          <div>
            <span className="text-white font-bold text-4xl">{day}</span>
            {weatherData.name?<div className="mt-40 ml-20 text-white text-xl">
              <p className="font-semibold text-3xl">{weatherData.name}</p>
              <span>Description : {weatherData.weather[0].main}</span>
              <table className="mt-2">
                <tbody>
                  <tr>
                    <td>Temperature :</td>
                    <td>{weatherData.main.temp}K</td>
                    <td>( max :</td>
                    <td>{weatherData.main.temp_max}K,</td>
                    <td>min :</td>
                    <td>{weatherData.main.temp_min}K )</td>
                  </tr>
                  <tr>
                    <td>Humidity :</td>
                    <td>{weatherData.main.humidity}%</td>
                  </tr>
                  <tr>
                    <td>Pressure :</td>
                    <td>{weatherData.main.pressure}hPa</td>
                  </tr>
                  <tr>
                    <td>Wind Speed :</td>
                    <td>{weatherData.wind.speed}m/s</td>
                  </tr>
                  <tr>
                    <td>Cloudiness :</td>
                    <td>{weatherData.clouds.all}%</td>
                  </tr>
                </tbody>
              </table>
            </div>:<p className="block mt-40 ml-20 text-white text-3xl font-semibold">Loading..</p>}
          </div>
        </div>
        <div className="w-1/2 h-[100vh] flex justify-center items-center relative">
          {/* <div className="-z-10 blur-sm h-[100vh] w-[80%] absolute"></div> */}
          
            <div className="h-[60%] w-[55%] flex flex-col justify-center items-center bg-gray-500 -translate-y-10 text-white rounded-lg shadow-lg shadow-black">
              <h1 className="mb-10 font-bold text-2xl">Check Weather Of Your Locality</h1>
              <div className="flex flex-col justify-center">
                <label className="self-start mb-2 font-semibold text-lg">City</label>
                <input className="w-full px-2 py-2 text-base rounded-lg outline-none text-black" type="text" placeholder="City" value={cityName} onChange={(e) => { setCityName(e.target.value) }} />
              </div>
              <button onClick={handleClick} className="mt-10 bg-blue-500 py-2 px-4 rounded-xl hover:bg-blue-300 font-semibold text-lg transition-all duration-150 hover:ease-in-out">Check Weather</button>
            </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;

