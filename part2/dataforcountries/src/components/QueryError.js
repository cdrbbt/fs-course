import React from 'react'

const QueryError = ({ errorCode }) => {
  if (errorCode === 1) return <p>Too many results, please specify your search</p>
  else return (
    <p>No countries found</p>
  )
}

export default QueryError
