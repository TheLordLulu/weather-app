import "./App.css";

import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
// import Forcast from "./components/Forcast";
import getFormattedWeatherData from "./services/weatherService";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
// useStates for getting cities, units and weather
  const [query, setQuery] = useState({q: 'Atlanta'})
  const [units, setUnits] = useState('imperial')
  const [weather, setWeather] = useState(null)

// useEffect for getting the weather data 
 useEffect(() => {

    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.'

      // toast.info('Fetching weather for ' + message)

      await getFormattedWeatherData({...query, units})
      .then(data => {
        // toast.success(`Successfull fetched weather for ${data.name}, 
        // ${data.country}`)
        setWeather(data)
      }) 
      
    }
  
  
    fetchWeather();
  }, [query, units])





  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData({q: 'atlanta'})
  //   console.log(data)
  // }


  // fetchWeather();


  const formatBackground = () => {
    if(!weather) {
      return "bg-[url('https://i.gifer.com/2M8t.gif')]"
    } else if (weather.main === 'Rain') {
      return "bg-[url('https://media.tenor.com/ZAw_hz_GBBsAAAAd/rain.gif')] "
    } else if (weather.main === 'Snow') {
      return "bg-[url('https://31.media.tumblr.com/3baf8f136f4e4f89c3fdb9c166676fca/tumblr_mm874nhG6K1rt8rtro1_500.gif')] "
    } else if (weather.main === 'Clear') {
      return "bg-[url('https://i.gifer.com/2M8t.gif')] " 
    } else if(weather.main === 'Clouds') {
      return "bg-[url('https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif')] " 
    } else if(weather.main === 'Thunderstorm') {
      return "bg-[url('https://thumbs.gfycat.com/ClearWelllitEmu-max-1mb.gif')] " 
    }else if(weather.main === 'Drizzle') {
      return "bg-[url('https://i.gifer.com/7sd5.gif')] " 
    }
    
    
  }

  // {`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
  return (
    <div className=' bg-black/80 h-screen '>
      <div className={`bg-cover max-w-7xl overflow-hidden   w-11/12 h-auto  2xsm:h-5/6 md:h-5/6 lg:h-5/6 xl:h-4/6 2xl:h-3/6 fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] shadow-xl shadow-black/70 ${formatBackground()}`}>
        <div className="grid h-full "> 

          <div className=" grid grid-cols-1 bg-transparent 
            h-full w-full backdrop-opacity-95"> 
              <div className="grid grid-cols-1 ">
                <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
                
                <TopButtons setQuery={setQuery} />
              </div>
             
          </div>


          </div>

          <div className=" grid grid-cols-1 h-full">
            {weather && (
              <div className=""> 
                 <TempAndDetails  weather={weather} />
                <TimeAndLocation  weather={weather} />
              </div>
              )}


             


              



          

        </div>
      </div>
       {/* <Forcast title="hourly forecast" />
        <Forcast title="Daily forecast" /> */} 
        <ToastContainer  autoClose={5000} theme="colored" newestOnTop={true}/>
    </div>
  );
}

export default App;






    
      