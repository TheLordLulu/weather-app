import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Beijing",
    },
    {
      id: 3,
      title: "Atlanta",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Miami",
    },
  ];
  return (
    <div className="flex flex-row  absolute justify-center items-center space-x-4 left-[50%] top-[5%] transform translate-x-[-50%] translate-y-[-50%] sm:space-x-10 lg:space-x-14 ">
      {cities.map((city) => (
        <button key={city.id} className="flex text-white  text-sm font-medium  2xsm:text-md xsm:text-xl  md:text-2xl  sm:text-xl lg:text-2xl " 
        onClick={() => setQuery({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
