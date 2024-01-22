import Navbar from './Navbar'
import "./Astarion.css"
import React, { useState, useEffect } from "react"
import Button from './Button B'

function Astarion() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/ships')
      .then(response => response.json())
      .then(data => {
        const firstShip = data[0]
        const romanticQuote = firstShip["Romantic Quote"]
        setQuote(romanticQuote)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])


    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header>
          <img className="img"src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/baldurs-gate-3/d/d4/Astarion.jpg?width=1600"/>
          <h1 className="text">{quote}</h1>
        </header>
        <h1 className="text">Astarion. The cynic, the thief, the vampire. He voices his constant disapproval of altruistic actions and controlling individuals and treasures his personal freedom. Born a High Elf, he hates the Vampire, Cazador, who turned and tortured him for hundreds of years. My girlfriend's favorite male character but does he hold up in my eyes?</h1>
        <Navbar/>
        <Button/>
      </div>
    )
  }
  
  export default Astarion