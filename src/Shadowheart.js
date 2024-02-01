import Navbar from './Navbar'
import React, { useState, useEffect } from "react"
import Button from './Button C'

function Shadowheart() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/ships')
      .then(response => response.json())
      .then(data => {
        const firstShip = data[2]
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
          <img className="img" src="https://www.dexerto.com/cdn-cgi/image/width=750,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/11/10/Shadowheart-Baldurs-Gate-3-Official-Artwork-Artifact.jpg"/>
          <h1 className="text">{quote}</h1>
        
        </header>
        <h1 className="text"> </h1>
        <Navbar/>
        <Button/>
      </div>
    )
  }
  
  export default Shadowheart