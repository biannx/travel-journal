import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Cards from './components/cards.jsx'
import data from './data.jsx'

function App() {
  const cards = data.map(item => {
    return (
      <Cards
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="container py-5">
        {cards}
      </section>
    </div>
  )
}

export default App
