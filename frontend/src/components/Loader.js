import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>  
  )
}

export default Loader
