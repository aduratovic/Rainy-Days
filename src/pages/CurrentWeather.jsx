import { useContext } from "react";
import CurrentWeatherContainer from "../components/CurrentWeather/CurrentWeatherContainer";
import SearchBar from "../components/WeatherContainer/SearchBar";
import WeatherContext from "../context/WeatherContext";

const CurrentWeather = () => {
  const { currentData, isLoading } = useContext(WeatherContext);

  return (
    <div className="weather-container">
      <SearchBar page={"Current"} />
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#03045e",
        }}
      >
        Current Weather for {currentData?.name}
      </h1>
      {!isLoading && currentData ? (
        <CurrentWeatherContainer data={currentData} />
      ) : null}
    </div>
  );
};

export default CurrentWeather;
