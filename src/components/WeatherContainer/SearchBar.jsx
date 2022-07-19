import React from 'react'

const SearchBar = () => {
  return (
    <div className='container search-container'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <h3>Search by City Name</h3>
        <input type='text' />
        <button type='submit'>
          <i
            className='fa-solid fa-magnifying-glass'
            style={{ marginRight: '5px' }}
          ></i>{' '}
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
