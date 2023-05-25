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
           <div className="xl:w-1/2 xl:h-[100vh] flex justify-center items-center flex-col xl:flex-row relative my-12 xl:my-0">
          {/* <div className="-z-10 blur-sm h-[100vh] w-[80%] absolute"></div> */}
          
            <div className="xl:h-[60%] xl:w-[55%] flex flex-col xl:justify-center xl:items-center bg-gray-500 xl:-translate-y-10 text-white rounded-lg shadow-lg shadow-black p-10">
              <h1 className="mb-10 font-bold text-2xl text-center xl:block hidden">Check Weather Of Your <br /> Locality</h1>
              <div className="flex xl:flex-col justify-center items-center">
                <label className="self-start mb-2 font-semibold text-lg mr-4">City</label>
                <input className="w-full px-2 py-2 text-base rounded-lg outline-none text-black" type="text" placeholder="City" value={cityName} onChange={(e) => { setCityName(e.target.value) }} />
              </div>
              <button onClick={handleClick} className="mt-10 bg-blue-900 py-2 px-4 rounded-xl hover:bg-blue-800 font-semibold text-lg transition-all duration-150 hover:ease-in-out">Check Weather</button>
            </div>
          
        </div> 
    </>
  )
}

export default WeatherForm
