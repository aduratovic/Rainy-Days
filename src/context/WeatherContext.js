import { createContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [forecast, setForecast] = useState([]);
  const [dayTimeForecast, setDayTimeForecast] = useState([]);
  const [nightTimeForecast, setNightTimeForecast] = useState([]);
  const [isDay, setIsDay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState("Detroit");

  const getForecast = async () => {
    setIsLoading(true);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=4300e98fd30d68ae8b76eadcf64b9d6c&units=imperial`
      )
      .then((res) => {
        setForecast(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const sortData = (data) => {
    let dayTime = [];
    let nightTime = [];
    data.list.forEach((item) => {
      if (item.dt_txt.includes("15:00:00")) {
        dayTime.push(item);
      }
      if (item.dt_txt.includes("03:00:00")) {
        nightTime.push(item);
      }
      setDayTimeForecast(dayTime);
      setNightTimeForecast(nightTime);
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        forecast,
        setForecast,
        dayTimeForecast,
        setDayTimeForecast,
        nightTimeForecast,
        setNightTimeForecast,
        isDay,
        setIsDay,
        getForecast,
        sortData,
        isLoading,
        cityName,
        setCityName,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
