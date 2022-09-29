import React from 'react'

const Pagination = ({ next, onNext }) => {
  function handleNext() {
    onNext()
  }
  // TODO --> /* Include the same as next but prev, first prev = null */

  return (
    <div>
      <ul className='pagination justify-content-center'>
        {next ? (
          <li className='page-item'>
            <button className='page-link' onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Pagination
