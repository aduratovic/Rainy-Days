import React from 'react'
import NotFoundImg from '../assets/img/404.jpg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container not-found-container'>
      <img src={NotFoundImg} alt='404' />
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to='/'>Go to home page</Link>
    </div>
  )
}

export default NotFound
