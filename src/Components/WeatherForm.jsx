import React,{useState} from 'react'

const WeatherForm = ({getWeatherData}) => {

    const [cityName, setCityName] = useState('');


    function handleClick(e) {
    getWeatherData(cityName);
    e.preventDefault();
    setCityName("");
  }

  return (
    <>
           <div className="w-1/2 h-[100vh] flex justify-center items-center relative">
          {/* <div className="-z-10 blur-sm h-[100vh] w-[80%] absolute"></div> */}
          
            <div className="h-[60%] w-[55%] flex flex-col justify-center items-center bg-gray-500 -translate-y-10 text-white rounded-lg shadow-lg shadow-black">
              <h1 className="mb-10 font-bold text-2xl text-center">Check Weather Of Your <br /> Locality</h1>
              <div className="flex flex-col justify-center">
                <label className="self-start mb-2 font-semibold text-lg">City</label>
                <input className="w-full px-2 py-2 text-base rounded-lg outline-none text-black" type="text" placeholder="City" value={cityName} onChange={(e) => { setCityName(e.target.value) }} />
              </div>
              <button onClick={handleClick} className="mt-10 bg-blue-900 py-2 px-4 rounded-xl hover:bg-blue-800 font-semibold text-lg transition-all duration-150 hover:ease-in-out">Check Weather</button>
            </div>
          
        </div> 
    </>
  )
}

export default WeatherForm
