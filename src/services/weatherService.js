import { DateTime } from "luxon"
import API_KEY from "../apikey"

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

//getting weather data from url
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    
    return fetch(url)
    .then((res) => res.json())
    // .then((data) => data)
}
// formatting the weather data pulled from api 
const formatCurrentWeather = (data) => {
    //getting the general data to format
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    // geting the details and icons from api
    const {main: main, description, icon} = weather[0]

    //return all the data formatted
 return {lat, lon, temp, feels_like, temp_max, temp_min, 
     humidity, name, dt, country, sunrise, sunset, description, icon, main, speed}
}



// Commentted out the hourly and daily forcast functionality because it is too expensive 

// const formatForcastWeather = (data) => {

//     let {
//         timezone, daily, hourly
//     } = data

//     daily = daily.slice(1,6).map(d => {
//         return {
//             title: (d.dt, timezone, 'ccc'),
//             temp: d.temp.day,
//             icon: d.weather[0].icon,
//         }
//     })

//     hourly = hourly.slice(1,6).map(d => {
//         return {
//             title: (d.dt, timezone, 'hh:mm:a'),
//             temp: d.temp.day,
//             icon: d.weather[0].icon,
//         }
//     })



//     return {timezone, daily, hourly}
// }


// getting the data formatted from the formatCurrentWeather function
const getFormattedWeatherData = async (searchParams) => {
    //getting the weather data
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
    .then(formatCurrentWeather)

    //getting the longitude and latitude and formatting it 
    const {lat, lon} = formattedCurrentWeather

    // const formattedForecastWeather = await getWeatherData('onecall', {
    //     lat,lon, exclude: 'current,minutely,alerts', units: searchParams.units
    // }).then(formatForcastWeather)
    

    // returning the formatted data by copying the information using the spread operator
    return {...formattedCurrentWeather, }

}

// formatting the time to the correct time and date
const formatToLocalTime = (secs, zone, format = " h:mm a' 'cccc, dd, LLL, yy ") => DateTime.fromSeconds(secs).
setZone(zone).toFormat(format)

//getting the correct icon to display in app 
const iconURLFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData

export {formatToLocalTime, iconURLFromCode}