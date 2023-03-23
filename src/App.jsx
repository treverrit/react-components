import { useState } from 'react'
import './App.css'
import CardSection from './components/cardSection/CardSection'
import Carousel from './components/carousel/Carousel'
import Navbar from './components/navbar/Navbar'
import SearchComponent from './components/searchBar/SearchComponent'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <SearchComponent/>
      <Carousel/>
      <CardSection/>
    </div>
  )
}

export default App
