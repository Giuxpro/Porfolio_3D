import React from 'react'
import CV from "../assets/img/CV-Alberto.pdf"

const Cv = () => {
  return (
    <div className='btnC'>
        <a href={CV} download className='btn btnCv'>Download CV</a>
    </div>
  )
}

export default Cv