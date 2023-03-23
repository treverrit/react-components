import React from 'react'
import './cardSection.css'

function Card({src, alt, title, text, url, buttonText}) {
  return (
    <div className='card'>
      {src && <img src={src} alt={alt} className='card-image'/>}
      <h2 className='card-title'>{title}</h2>
      <p className='card-text'>{text}</p>
      {buttonText && <a href={url} className='card-button'>{buttonText}</a>}
    </div>
  )
}

function CardSection() {
  return (
    <div className='card-section' id='blog'>
      {/*this component should not have a picture*/}
      <Card alt='1st' title='Lorem ipsum dolor' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At' url='#home' buttonText='Follow Along'/>

      {/*these components should have all components*/}
      <Card src='https://picsum.photos/seed/img6/300/200' alt='1st' title='Lorem ipsum dolor' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At' url='#home' buttonText='Follow Along'/>
      <Card src="https://picsum.photos/seed/img8/300/200" alt='2nd' title='Lorem ipsum' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At' url='#home' buttonText='Getting Started'/>

      {/*these components should not have a button*/}
      <Card src="https://picsum.photos/seed/img10/300/200" alt='3rd' title='Lorem ipsum dolor sit' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At' url='#home'/>
      <Card src="https://picsum.photos/seed/img12/300/200" alt='4th' title='Lorem' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At'/>
    </div>
  )
}

export default CardSection
