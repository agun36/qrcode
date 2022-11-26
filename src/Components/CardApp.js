import React from 'react'
import { Card } from 'react-bootstrap'

import cardimg from '../asset/image-qr-code.png'

const CardApp = () => {
  return (
    <div className=''>
      <div className='body'>
        <Card>
          <Card.Img variant='top' src={cardimg} />
          <Card.Body>
            <Card.Title className='text--title'>
              Improve your front-end skills by building projects{' '}
            </Card.Title>
            <Card.Text className='text'>
              Scan the QR code to visit frontend mentor and take your coding
              skills to the next level{' '}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default CardApp
