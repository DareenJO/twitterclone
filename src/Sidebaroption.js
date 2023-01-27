import React from 'react'
import "./Sidebaroption.css";

function Sidebaroption(text,Icon) {
  return (
    <div className='Sidebaroption'>
     <Icon/>
     <h2>{text}</h2>
    </div>
  )
}

export default Sidebaroption
