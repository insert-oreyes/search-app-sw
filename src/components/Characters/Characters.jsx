import React from 'react'

const Characters = ({ people }) => {
  return (
    <div className='row'>
      {people.map((item, index) => {
        return (
          <div key={index} className='col mb-3'>
            <div className='card' style={{ minWidth: '200px' }}>
              <img src={''} alt='' />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <hr />
                <p>Hair color: {item.hair_color}</p>
                <p>Height: {item.height}</p>
                <p>Eye color: {item.eye_color}</p>
                <p>Gender: {item.gender}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Characters
