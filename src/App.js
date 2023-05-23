import axios from "axios";
import { useState, useEffect} from "react";
import WeatherData from "./Components/WeatherData";
import WeatherForm from "./Components/WeatherForm";

function App() {

  // const lon = useRef();
  // const lat = useRef();

  const [lon,setLon] = useState()
  const [lat,setLat] = useState()


  
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const success =(position)=>{
      // lon.current=position.coords.longitude;
      // lat.current=position.coords.latitude;
      // setLonAndLat([position.coords.longitude,position.coords.latitude])
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);

      console.log([lon,lat]);
      console.log("correct");
    }
    const errorCallback =()=>{
        setWeatherData({name:"Couldn't get Your Location." });
    }   
    console.log(navigator.geolocation.getCurrentPosition(success,errorCallback))
    console.log([lon,lat]);    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=973d4d8415230270ae88e8c16d168146`)
      .then((res) => {
        console.log(res.data);
        setWeatherData(res.data);
      })
      .catch((err) => {
        setWeatherData({name:"Couldn't get Your Location." })
      })
  }, [])



  

  function getWeatherData(City) {
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${City}&appid=973d4d8415230270ae88e8c16d168146`)
      .then((resp) => {
        // lon.current=resp.data[0].lon;
        // lat.current=resp.data[0].lat;
        // setLonAndLat([resp.data[0].lon,resp.data[0].lat])
        setLon(resp.data[0].lon);
        setLon(resp.data[0].lat);
      })
      .then(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.current}&lon=${lon.current}&appid=973d4d8415230270ae88e8c16d168146`)
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
    <div className="w-full h-[100vh] overflow-clip">
      <img src="backgroundImg.jpg" alt="scenery" className="absolute -z-20 h-[100vh] w-full" />
      <nav className="text-center text-4xl py-4 text-white border-b-2 border-black font-bold">Weather App</nav>
      <div className="flex justify-center items-center relatiuve">
        <div className="w-1/2 h-[100vh] pl-10 pt-10">
          <WeatherData weatherData={weatherData} />
        </div>
        <WeatherForm getWeatherData={getWeatherData} />
      </div>

    </div> 
  );
}

export default App;

