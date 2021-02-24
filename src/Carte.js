import React from 'react'
import { Button } from 'react-bootstrap'

const Carte = ({ filterList, family }) => {
  return (
    <div className='container d-flex justify-content-center'>
      {family.map((category, index) => {
        return (
          <Button
            className='m-1 btn-smaller'
            variant='info'
            key={index}
            onClick={() => filterList(category)}
          >
            {category}
          </Button>
        )
      })}
    </div>
  )
}

export default Carte
