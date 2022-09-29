import React, { useState } from 'react'

const SearchBar = ({ fetchData }) => {
  const [keyword, setKeyword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetchData(keyword)
  }

  function handleChange(e) {
    setKeyword(e.target.value)
  }
  console.log(keyword)

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand text-uppercase' href='/'>
          Search character
        </a>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder='Enter character'
            type='text'
            value={keyword}
          />
          <button>Search</button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar
