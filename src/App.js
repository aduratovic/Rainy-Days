import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
// COMPONENTS
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import CurrentWeather from "./pages/CurrentWeather";
// CONTEXT
import WeatherContext from "./context/WeatherContext";
const App = () => {
  const { getForecast, getCurrentWeather } = useContext(WeatherContext);

  useEffect(() => {
    getForecast();
    getCurrentWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-date" element={<CurrentWeather />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
