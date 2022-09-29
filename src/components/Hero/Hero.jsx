import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Characters from '../Characters/Characters'
import Pagination from '../Pagination/Pagination'

const Hero = () => {
  const [people, setPeople] = useState([])
  const [info, setInfo] = useState({})

  const fetchData = (keyword) => {
    let apiURL = `https://swapi.dev/api/people/`
    if (keyword && keyword !== '') apiURL += `?search=${keyword}`

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results)
        setInfo([data.next])
      })
      // TODO! --> check error handling
      .catch((error) => console.log(error))
  }
  console.log(setInfo)

  
  // TODO! --> finish pagination
  const onNext = () => {
    fetchData(info)
  }

  // TODO! --> there's something going on with useEffect
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='App'>
      <SearchBar fetchData={fetchData} />

      {people.length > 0 && (
        <div className='container mt-3'>
          <Characters people={people} />
          <Pagination next={info} onNext={onNext} />
        </div>
      )}
    </div>
  )
}

export default Hero
