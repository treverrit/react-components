import React, { useState } from 'react'
import './searchComponent.css'
import {FaSearch} from 'react-icons/fa'

function SearchBar({setResults}) {
  const [inputValue, setInputValue] = useState('')

  const fetchData = inputData => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      const results = json.filter(user => {
        return inputData && user.name && user.name.toLowerCase().includes(inputData) 
      })
      console.log(results)
      setResults(results)
    })
  }

  const handleChange = input => {
    setInputValue(input)
    fetchData(input)
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'/>
      <input type="text" placeholder='Type to search...' value={inputValue} onChange={e => handleChange(e.target.value)}/>
    </div>
  )
}

function SearcResult({result}) {
  return (
    <div className='result'>
      <p>{result.name}</p>
    </div>
  )
}

function SearchResultsList({results}) {
  return (
    <div className='results'>
      {results.map((result, index) => (
        <SearcResult key={index} result={result}/>
      ))}
    </div>
  )
}

function SearchComponent() {
  const [searchResults, setSearchResults] = useState([])
  
  return (
  <div className='search-section' id='search'>
    <SearchBar setResults={setSearchResults}/>
    <SearchResultsList results={searchResults}/>
  </div>
  )
}

export default SearchComponent
