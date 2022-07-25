import { useState, useContext } from "react";
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

const SingleResult = ({ data }) => {
  const { forecast } = useContext(WeatherContext);
  const [isOpen, setIsOpen] = useState(false);
  const formatDate = (date) => {
    const d = new Date(date);
    const monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthName[d.getMonth()];
    const day = d.getDate();
    return `${month} - ${day}`;
  };

  const isDayTime = () => {
    if (data.dt_txt.includes("15:00:00")) {
      return true;
    }
    return false;
  };

  const formatHour = (date) => {
    const d = new Date(date);
    let hour = d.getHours();
    const minute = d.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${hour}:${minute}0 ${ampm}`;
  };

  return (
    <>
      <div className="single-result" onClick={() => setIsOpen(!isOpen)}>
        <div className="single-result__header">
          <div className="weather-icon">
            <img
              src={
                data.weather[0].description === "clear sky" && isDayTime()
                  ? Sun
                  : data.weather[0].description === "clear sky" && !isDayTime()
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
              width={100}
            />
          </div>
        </div>

        <div className="separator"></div>

        <div className="single-result__body">
          <p>{formatDate(data.dt_txt)}</p>
          <p>{data.main.temp.toFixed(0)}°F</p>
          <p>{data.weather[0].description}</p>
        </div>

        {/* MODAL */}
      </div>
      <div className={`modal ${isOpen ? "active" : ""}`}>
        <div className="modal-content">
          <button onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="modal-content__body">
            <div className="header-info">
              <div className="left">
                <h2>Weather Report for {forecast?.city?.name}</h2>
                <h2>
                  {formatDate(data.dt_txt)} - {formatHour(data.dt_txt)}{" "}
                </h2>
                <div className=""></div>
              </div>
              <div className="right">
                <div className="weather-icon">
                  <div className="weather-icon">
                    <img
                      src={
                        data.weather[0].description === "clear sky"
                          ? Sun
                          : data.weather[0].description === "few clouds"
                          ? LightRain
                          : data.weather[0].description === "scattered clouds"
                          ? CloudDay
                          : data.weather[0].description === "overcast clouds"
                          ? OverCast
                          : data.weather[0].description === "light rain"
                          ? LightRain
                          : null
                      }
                      alt=""
                      width={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="separator"></div>
            <div className="detailed-info">
              <p>Temp: {data.main.temp.toFixed(0)}°F</p>
              <p>Feels Like: {data.main.feels_like.toFixed(0)}°F</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>Wind: {data.wind.speed} mph</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleResult;
