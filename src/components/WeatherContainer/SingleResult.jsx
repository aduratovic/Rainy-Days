import { useState, useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import Sun from "../../assets/img/sun.png";

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

  const formatHour = (date) => {
    const d = new Date(date);
    let hour = d.getHours();
    const minute = d.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${hour}:${minute}0 ${ampm}`;
  };

  return (
    <div className="single-result" onClick={() => setIsOpen(!isOpen)}>
      <div className="single-result__header">
        <div className="weather-icon">
          {/* <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt=''
            width={100}
          /> */}
          <img src={Sun} alt="" width={100} />
        </div>
      </div>
      <div className="single-result__body">
        <p>{formatDate(data.dt_txt)}</p>
        <p>{data.main.temp.toFixed(0)}°F</p>
        <p>{data.weather[0].description}</p>
      </div>

      {/* MODAL */}

      <div className={`modal ${isOpen ? "active" : ""}`}>
        <div className="modal-content">
          <button>
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="modal-content__body">
            <div className="header-info">
              <div className="left">
                <h2>Weather Report for {forecast?.city?.name}</h2>
                <h2>
                  {formatDate(data.dt_txt)} - {formatHour(data.dt_txt)}{" "}
                </h2>
              </div>
              <div className="right">
                <div className="weather-icon">
                  {/* <img
                    src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    alt=''
                    width={100}
                  /> */}
                  <img src="" alt="" />
                </div>
              </div>
            </div>

            <div className="separator"></div>
            <div className="detailed-info">
              <p>Temp: {data.main.temp.toFixed(0)}°F</p>
              <p>Feels Like: {data.main.feels_like.toFixed(0)}°F</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>
                Wind: {data.wind.speed} mph {data.wind.deg}°
              </p>
              <p>Visibility: {data.visibility} miles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResult;
