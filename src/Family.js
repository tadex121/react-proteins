import React from 'react'
import { CardColumns, Card } from 'react-bootstrap'

const Family = ({ list }) => {
  return (
    <div className='container'>
      <CardColumns className='m-3'>
        {list.map((proteinItem) => {
          const { id, title, img, description, price } = proteinItem
          return (
            <Card key={id} className='my-3'>
              <Card.Img src={img} alt={title} />
              <Card.Body className=''>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <Card.Footer className='d-flex justify-content-center font-weight-bold'>
                {price} €
              </Card.Footer>
            </Card>
          )
        })}
      </CardColumns>
    </div>
  )
}

export default Family
