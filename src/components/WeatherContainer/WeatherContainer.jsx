import React from 'react'
import SearchBar from './SearchBar'
import WeatherResults from './WeatherResults'

const WeatherContainer = () => {
  return (
    <div className='container weather-container'>
      <SearchBar />
      <WeatherResults />
    </div>
  )
}

export default WeatherContainer
