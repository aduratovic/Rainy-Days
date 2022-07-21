import { Link } from 'react-router-dom'
import { useContext } from 'react'
// CONTEXT
import WeatherContext from '../context/WeatherContext'

const Header = () => {
  const { isDay, setIsDay } = useContext(WeatherContext)

  return (
    <header>
      <div className='container'>
        <div className='header-container'>
          <h1>RAINY DAYS</h1>
          <nav>
            {/* TOGGLE */}
            <div className='toggle-container'>
              <i className='fa-solid fa-sun'></i>
              <div
                className={`toggle ${!isDay ? 'active' : ''}`}
                onClick={() => setIsDay(!isDay)}
              >
                <div className='toggle-ball'></div>
              </div>
              <i className='fa-solid fa-moon'></i>
            </div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header