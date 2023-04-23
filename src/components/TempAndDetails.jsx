import React from "react";

import {
  
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconURLFromCode } from "../services/weatherService";

// function for getting weather information 
function TempAndDetails({weather: {description, icon, temp, temp_min, temp_max, sunrise, sunset, speed,
humidity, feels_like, timezone}}) {
  return (
    <div className="grid fixed w-fit top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
      
      <div className="flex items-center justify-center py-3 text-xl text-cyan-300 sm:text-2xl  ">
        <p>{description}</p>
      </div>
      
      <div className="flex flex-row items-center justify-between text-white py-2 ">
        <img
          src={iconURLFromCode(icon)}
          alt=""
          className="w-20"
        />
        <p className="text-6xl sm:text-7xl"> {`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center sm:text-xl ">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center sm:text-xl">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center sm:text-xl">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-sm text-white items-center justify-center space-x-2 py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;

