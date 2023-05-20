import axios from "axios";
import { useEffect } from "react";
import WeatherData from "./Componenets/WeatherData";
import WeatherForm from "./Componenets/WeatherForm";

function App() {

  let [lon, lat] = [77.2219388, 28.6517178];
  let data ={};
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=28.6517&lon=77.2219&appid=973d4d8415230270ae88e8c16d168146`)
      .then((res) => {
        console.log(res.data);
        data=res.data;
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
                    return (res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        })
        .catch((err) => {
            console.log(err);
        })
}

let getWeatherDataFunc = ()=>{getWeatherData()};


  return (
    <div className="w-full h-[100vh] overflow-clip">
    <img src="backgroundImg.jpg" alt="scenery" className="absolute -z-20 h-[100vh] w-full" />
    <nav className="text-center bg-[#224b8b] text-4xl py-4 text-white">Weather App</nav>
    <div className="flex justify-center items-center relatiuve">
    <div className="w-1/2 h-[100vh] pl-10 pt-10">
      
      <WeatherData getWeatherDataFunc={getWeatherDataFunc} data={data} />
    </div>
    <div className="w-1/2 h-[100vh] flex justify-center items-center relative">
      {/* <div className="-z-10 blur-sm h-[100vh] w-[80%] absolute"></div> */}
      <WeatherForm getWeatherData={getWeatherData} />
    </div>
    </div>
      
    </div>
  );
}

export default App;

