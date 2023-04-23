import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({weather: {dt, timezone, name, country} }) {
  return (
    <div className="grid grid-cols-1 fixed top-[80%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ">

<div className="flex items-center justify-center my-3  ">
        <p className="text-white  text-xl font-medium 2xsm:text-md xsm:text-xl  md:text-3xl  sm:text-2xl lg:text-4xl">{`${name},
        ${country}`}</p>
      </div>


      <div className=" flex flex-row">
        <p className="flex items-center justify-center text-white text-md font-light  2xsm:text-md xsm:text-xl  md:text-3xl  sm:text-2xl lg:text-4xl  ">
          {formatToLocalTime(dt,timezone)}
        </p>
      </div>

      
    </div>
  );
}

export default TimeAndLocation;

