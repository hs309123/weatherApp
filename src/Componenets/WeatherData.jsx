import React, { useEffect,useState } from 'react'

export default function WeatherData({getWeatherDataFunc,data}) {

    const [day, setDay] = useState('');

    function getDate() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        setDay(date.toLocaleDateString('bn-IN', options));
    }


    useEffect(()=>{
        getDate();
        setWeatherData(getWeatherDataFunc);
    },[getWeatherDataFunc]);

    const [weatherData, setWeatherData] = useState(data);




    return (
        <div>
            <span className="text-white font-bold text-4xl">{day}</span>
            {weatherData ? <div className="mt-40 ml-20 text-white text-xl">
                <p className="font-semibold text-3xl">{weatherData.name}</p>
                <span>Description : {weatherData.weather[0].main}</span>
                <table>
                    <tbody>
                        <tr>
                            <td>Temperature :</td>
                            <td>{weatherData.main.temp}</td>
                            <td>( max :</td>
                            <td>{weatherData.main.temp_max},</td>
                            <td>min :</td>
                            <td>{weatherData.main.temp_min} )</td>
                        </tr>
                        <tr>
                            <td>Humidity :</td>
                            <td>{weatherData.main.humidity}</td>
                        </tr>
                        <tr>
                            <td>Pressure :</td>
                            <td>{weatherData.main.pressure}</td>
                        </tr>
                        <tr>
                            <td>Wind Speed :</td>
                            <td>{weatherData.wind.speed}</td>
                        </tr>
                    </tbody>
                </table>
            </div> : <p>Loading....</p>}
        </div>
    )
}
