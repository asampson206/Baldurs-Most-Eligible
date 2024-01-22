import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import CommentSection from './CommentSection'

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <main>
        <img className="img"src="https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg?t=1705604554"/>
        <Navbar className="navbar"/>
        <h1 className="text">Welcome to Baldur's most Eligible!</h1>
        <h1 className="text">There are many who are worthy in Larian Studio's virtual world but few were chosen by my girlfriend to be considered among the most wanted.</h1>
        <h2 className="text">I've organized our gallery to show off our contestants and take you along as I make the decision of which one is my favorite for my own playthrough of Baldur's Gate 3!</h2>
      </main>
      <CommentSection/>
    </div>
  )
}




export default Home

