import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>
        This is a weather app built with React, React Router, and Context API.
      </p>
      <p>
        The app uses the OpenWeatherMap API to get weather data. The data is
        then stored in a Context API.
      </p>
    </div>
  );
};

export default AboutPage;
