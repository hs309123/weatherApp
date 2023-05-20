import React,{useState} from 'react'

export default function WeatherForm({getWeatherData}) {
  const [cityName, setCityName] = useState('');
    function handleClick(e) {
        getWeatherData(cityName);
        e.preventDefault();
        setCityName("");
      }


  return (
    <div>
      <div className="h-[60%] w-[60%] flex flex-col justify-center items-center bg-gray-500 -translate-y-10 text-white rounded-lg shadow-lg shadow-black">
      <h1 className="mb-10 font-bold text-2xl">Check Weather Of Your Locality</h1>
      <div className="flex flex-col justify-center">
      <label className="self-start mb-2 pl-2 font-semibold text-lg">City</label>
      <input className="w-full px-2 py-2 text-base rounded-lg outline-none text-black" type="text" placeholder="City" value={cityName} onChange={(e) => { setCityName(e.target.value) }} />
      </div>
      <button onClick={handleClick} className="mt-10 bg-blue-500 py-2 px-4 rounded-xl hover:bg-blue-300 font-semibold text-lg transition-all duration-150 hover:ease-in-out">Check Weather</button>
      </div>
    </div>
  )
}
