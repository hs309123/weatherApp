import axios from "axios";
import { useState, useEffect} from "react";
import WeatherData from "./Components/WeatherData";
import WeatherForm from "./Components/WeatherForm";

function App() {

  const [lon,setLon] = useState(77.2219)
  const [lat,setLat] = useState(28.6517)


  
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=973d4d8415230270ae88e8c16d168146`)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err)
        setWeatherData({name:"Couldn't get Your Location." })
      })
  },[])



  

  function getWeatherData(City) {
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${City}&appid=973d4d8415230270ae88e8c16d168146`)
      .then((resp) => {
        setLon(resp.data[0].lon);
        setLat(resp.data[0].lat);
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
        setWeatherData({name:'Invalid City'})
      })
  }


  return (
    <div className="w-full h-[100vh] sm:overflow-clip overflow-y-scroll">
      <img src="backgroundImg.jpg" alt="scenery" className="absolute -z-20 h-[100vh] w-full" />
      <nav className="text-center text-4xl py-4 text-white border-b-2 border-black font-bold">Weather App</nav>
      <div className="flex justify-around items-center flex-col-reverse lg:flex-row relative">
        <div className="xl:w-1/2 xl:h-[100vh] xl:pl-10 xl:pt-10">
          <WeatherData weatherData={weatherData} />
        </div>
        <WeatherForm getWeatherData={getWeatherData} />
      </div>

    </div> 
  );
}

export default App;

