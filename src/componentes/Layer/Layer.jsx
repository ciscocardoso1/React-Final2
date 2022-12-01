import React from 'react'
import truck from './iconos/truck.png'
import peso from './iconos/peso.png'
import card from './iconos/card.png'
import './Layer.css'


const Layer = () => {
  return (
    <div className='layContainer'>

      <p>ENVIOS A TODO EL PAÍS!
        <i className="icon">
          <img src={truck} alt="" /></i>
      </p>


      <p> 3 CUOTAS SIN INTERÉS
        <i className="icon">
          <img src={card} alt="" /></i>
      </p>


      <p>20% OFF EN EFECTIVO
        <i className="icon">
          <img src={peso} alt="" /></i>
      </p>

    </div>
  )
}

export default Layer
