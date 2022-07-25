import { Link } from "react-router-dom";
import { useContext } from "react";
// CONTEXT
import WeatherContext from "../context/WeatherContext";

import logo from "../assets/img/logo3.png";
const Header = () => {
  const { isDay, setIsDay } = useContext(WeatherContext);

  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="" width={60} />
            <h1>RAINY DAYS</h1>
          </div>
          <nav>
            {/* TOGGLE */}
            <div className="toggle-container">
              <i className="fa-solid fa-sun"></i>
              <div
                className={`toggle ${!isDay ? "active" : ""}`}
                onClick={() => setIsDay(!isDay)}
              >
                <div className="toggle-ball"></div>
              </div>
              <i className="fa-solid fa-moon"></i>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/current-date">Current Weather</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
