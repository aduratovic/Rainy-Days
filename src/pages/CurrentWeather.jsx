import React from "react";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import Sun from "../../assets/img/sun.png";
import ClearSkyNight from "../../assets/img/clearskynight.png";
import LightRain from "../../assets/img/lightrain.png";
import ModerateRain from "../../assets/img/moderaterain.png";
import OverCast from "../..//assets/img/overcast.png";
import CloudDay from "../../assets/img/scatteredcloudsday.png";
import CloudNight from "../../assets/img/scatteredcloudsnight.png";
import BrokenCloudDay from "../../assets/img/brokencloudsday.png";
import BrokenCloudNight from "../../assets/img/brokencloudsnight.png";

const CurrentWeatherContainer = ({ data }) => {
  const { isLoading } = useContext(WeatherContext);
  const getCurrentDay = () => {
    const date = new Date();
    const day = date.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  };

  //   get day and month
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[month]} ${day}`;
  };

  const isDayTime = () => {
    const date = new Date();
    const hour = date.getHours();
    return hour > 6 && hour < 18;
  };

  if (data && !isLoading) {
    return (
      <div className="current-container">
        <div className="current-header">
          <h3>
            Date : {getCurrentDay()} - {getCurrentDate()}
          </h3>
          <div className="icon">
            {data && (
              <img
                src={
                  data.weather[0].description === "clear sky" && isDayTime()
                    ? Sun
                    : data.weather[0].description === "clear sky" &&
                      !isDayTime()
                    ? ClearSkyNight
                    : data.weather[0].description === "few clouds"
                    ? LightRain
                    : data.weather[0].description === "scattered clouds" &&
                      isDayTime()
                    ? CloudDay
                    : data.weather[0].description === "scattered clouds" &&
                      !isDayTime()
                    ? CloudNight
                    : data.weather[0].description === "overcast clouds"
                    ? OverCast
                    : data.weather[0].description === "light rain"
                    ? LightRain
                    : data.weather[0].description === "moderate rain"
                    ? ModerateRain
                    : data.weather[0].description === "broken clouds" &&
                      isDayTime()
                    ? BrokenCloudDay
                    : data.weather[0].description === "broken clouds" &&
                      !isDayTime()
                    ? BrokenCloudNight
                    : null
                }
                alt=""
                width={200}
              />
            )}
          </div>
          <div className="weather-condition">
            <h3 style={{ textTransform: "capitalize" }}>
              {data.weather[0].description}
            </h3>
          </div>
        </div>
        <div className="current-wrap">
          <p>
            <span>
              <strong>Temperature : </strong>
            </span>
            {data.main.temp}
          </p>
          <p>
            <span>
              <strong>Humidity : </strong>
            </span>
            {data.main.humidity}
          </p>
          <p>
            <span>
              <strong>Pressure : </strong>
            </span>
            {data.main.pressure}
          </p>
        </div>
        <div className="current-wrap">
          <p>
            <span>
              <strong>Min Temperature : </strong>
            </span>
            {data.main.temp_min}
          </p>
          <p>
            <span>
              <strong>Max Temperature : </strong>
            </span>
            {data.main.temp_max}
          </p>
          <p>
            <span>
              <strong>Wind Speed : </strong>
            </span>
            {data.wind.speed}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CurrentWeatherContainer;
