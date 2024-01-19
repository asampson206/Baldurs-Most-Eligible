import React from 'react'
import Navbar from './Navbar';
import Shadowheart from './Shadowheart';
import Karlach from './Karlach';
import Astarion from './Astarion';
import "./App.css"

function Home() {
  return (
    <div className="div">
      <header>
        <Navbar/>
      </header>
      <main>
        <img className="img"src="https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg?t=1705604554"></img>
        
        <h1 className="text">Welcome to Baldur's most Eligible!</h1>
        <h1 className="text">There are many who are worthy in Larian Studio's virtual world but few were chosen by my girlfriend to be considered among the most wanted</h1>
        <h2 className="text">I've organized our gallery to show off our contestants and take you along as I make the decision of which one is my favorite for my own playthrough of Baldur's Gate 3</h2>
      </main>
     
    </div>
  )
}




export default Home

