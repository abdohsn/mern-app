import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState("not yet gotten");

  const getWeather = () => {
    axios.get("/getcairo").then((response) => {
      setWeather(response.data.temp_c);
    });
  };
  return (
    <div>
      <button onClick={getWeather}>get the weather</button>
      <h1>the wether is: {weather}</h1>
    </div>
  );
};

export default Weather;
