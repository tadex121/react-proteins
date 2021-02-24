import React, { useState } from 'react'
import './App.css'
import proteinsarray from './ProteinsArray'
import Carte from './Carte'
import Family from './Family'
import 'bootstrap/dist/css/bootstrap.min.css'

const eachFamily = [
  'All',
  ...new Set(proteinsarray.map((list) => list.category)),
]

function App() {
  const [proteins, setProteins] = useState(proteinsarray)
  const [family, setFamily] = useState(eachFamily)

  const filterList = (category) => {
    if (category === 'All') {
      setProteins(proteinsarray)
      return
    }
    const newList = proteinsarray.filter((list) => list.category === category)
    setProteins(newList)
  }

  return (
    <div>
      <h1
        style={{ fontWeight: 'bold' }}
        className='d-flex justify-content-center mt-4'
      >
        Proteins Products
      </h1>
      <Carte family={family} filterList={filterList} />
      <Family list={proteins} />
    </div>
  )
}

export default App
