import { useContext } from "react";
import SingleResult from "./SingleResult";
import WeatherContext from "../../context/WeatherContext";

const WeatherResults = () => {
  const { isDay, dayTimeForecast, nightTimeForecast, isLoading } =
    useContext(WeatherContext);
  return (
    <div className="container weather-result-container">
      {isDay && !isLoading
        ? dayTimeForecast.map((day, index) => (
            <SingleResult key={index} data={day} />
          ))
        : nightTimeForecast.map((night, index) => (
            <SingleResult key={index} data={night} />
          ))}
    </div>
  );
};

export default WeatherResults;
