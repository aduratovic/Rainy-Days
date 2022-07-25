import React from "react";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
const SearchBar = ({ page }) => {
  const { setCityName, getForecast, getCurrentWeather } =
    useContext(WeatherContext);
  return (
    <div className="container search-container">
      <form>
        <h3>Search by City Name</h3>
        <input
          type="text"
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            if (page === "Current") {
              e.preventDefault();
              getCurrentWeather();
            } else {
              e.preventDefault();
              getForecast();
            }
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ marginRight: "5px" }}
          ></i>{" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
