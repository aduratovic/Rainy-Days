import { useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import WeatherResults from "./WeatherResults";

// CONTEXT
import WeatherContext from "../../context/WeatherContext";

const WeatherContainer = () => {
  const { getForecast, sortData, forecast } = useContext(WeatherContext);

  useEffect(() => {
    getForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (forecast.list) {
      sortData(forecast);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecast]);

  return (
    <div className="container weather-container">
      <SearchBar />
      <h1
        style={{
          marginLeft: "60px",
          marginBottom: "-70px",
          marginTop: "50px",
          color: "#03045e",
        }}
      >
        5 Day Forecast For {forecast?.city?.name}
      </h1>
      <WeatherResults />
    </div>
  );
};

export default WeatherContainer;
