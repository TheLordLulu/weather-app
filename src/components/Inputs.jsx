import React, { useState } from "react";

import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({setQuery, units, setUnits}) {
//usestates for getting city data to show
  const [city, setCity] = useState('')

  //handle search
  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})
  }

  //handle location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users location.')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched')
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,
          lon,
        })

      }) 
    }
  }

  //handle units
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit ) setUnits(selectedUnit)
  }


  return (
    <div className="flex fixed left-[50%] top-[95%] transform translate-x-[-50%] translate-y-[-50%] ">
      <div className="flex flex-row w-auto justify-center space-x-1">
        <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-sm font-medium text-white p-1 shadow-xl bg-transparent focus:outline-none capitalize placeholder:lowercase    xsm:text-md sm:text-lg md:text-lg lg:text-xl "
          placeholder="Search..."
        />
         
         <div className="flex flex-row justify-center space-x-1">
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilMapMarker
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
         </div>
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center mx-3">
        <button name="metric" className="text-xl font-light text-white transition ease-out hover:scale-125" onClick={handleUnitsChange}>
          {" "}
          °C{" "}
          
        </button>
        <p className=" text-xl text-white mx-1">|</p>
        <button name="imperial" className="text-xl font-light text-white transition ease-out hover:scale-125" onClick={handleUnitsChange}>
          {" "}
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
