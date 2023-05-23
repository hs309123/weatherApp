import React, { useEffect,useState } from 'react'

export default function WeatherData({weatherData}) {

    const [day, setDay] = useState('');

    function getDate() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        setDay(date.toLocaleDateString('en-IN', options));
      }

    useEffect(()=>{
        getDate();
    },[])

  return (
    <div>
            <span className="text-white font-bold text-4xl">{day}</span>
            {weatherData.main?<div className="mt-40 ml-20 text-white text-xl">
            <p className="font-semibold text-3xl">{weatherData.name}</p>
              <div className="flex justify-between items-center w-[70%]"><span>Description : {weatherData.weather[0].main}</span><div className="bg-white rounded-lg -translate-y-8"><img className="w-[100px]" src={`icons/${weatherData.weather[0].icon}.png`} alt="WeatherLogo" /></div></div>
              
              <table>
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
            </div>:weatherData.name?<p className="block mt-40 ml-20 text-white text-3xl font-semibold">{weatherData.name}</p>:<p className="block mt-40 ml-20 text-white text-3xl font-semibold">Loading..</p>}
          </div>
  )
}
