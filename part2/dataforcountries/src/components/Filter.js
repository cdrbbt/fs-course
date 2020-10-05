import React from 'react'

const Filter = ({ filter, filterChange }) => {
  return (
    <div>
      <h2>Search</h2>
      Country search: <input value={filter} onChange={filterChange} />
    </div>
  )
}

export default Filter
