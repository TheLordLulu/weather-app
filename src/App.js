import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forcast from "./components/Forcast";
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

      toast.info('Fetching weather for ' + message)

      await getFormattedWeatherData({...query, units})
      .then(data => {
        toast.success(`Successfull fetched weather for ${data.name}, 
        ${data.country}`)
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
    if(!weather) return 'from-cyan-600 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp <= threshold) return 'from-cyan-600 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }

  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

      

      {weather && (
        <div> 
      <TimeAndLocation  weather={weather}/>
      <TempAndDetails weather={weather} />



        </div>
      )}

    
      {/* <Forcast title="hourly forecast" />
      <Forcast title="Daily forecast" /> */} 



      <ToastContainer  autoClose={5000} theme="colored" newestOnTop={true}/>
    </div>
  );
}

export default App;
