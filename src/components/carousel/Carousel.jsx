import React, { useState } from 'react'
import {images} from './assets/images.json'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './carousel.css'

function Carousel() {
  const [slide, setSlide] = useState(0)

  const slideLeft = () => {setSlide(slide === 0 ? images.length - 1 : slide - 1)}
  const slideRight = () => {setSlide(slide === images.length -1 ? 0 : slide + 1)}

  return (
    <div className='carousel' id='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={slideLeft}/>
      {images.map((image, index) => (
        <img src={image.src} alt={image.alt} key={index} className={slide === index ? 'image' : 'image-hidden'}/>
      ))}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={slideRight}/>
      <span className='indicators'>
        {images.map((_, index) => (
          <button key={index} className={slide === index ? 'indicator-active' : 'indicator-inactive'} onClick={() => {setSlide(index)}}></button>
        ))}
      </span>
    </div>
  )
}

export default Carousel
