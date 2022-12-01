import React from 'react'
import IndividualIntervalsExample from '../Carousel/Carousel'
import Layer from '../Layer/Layer'
import Carrete from '../Productos/Carrete'
import './home.css'




const home = () => {
  return (
    <>
    <div className='homeContainer'>
      <IndividualIntervalsExample />
      <Layer />
    </div>

    <div className='features'>
      <h3> Proximos Lanzamientos </h3>
      <Carrete/>
    </div>
    

    </>
  )
}

export default home

