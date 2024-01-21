import Navbar from './Navbar';
import "./Astarion.css"
import React, { useState, useEffect } from "react";
import RomanticQuote from './Quote';

function Astarion() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/ships')
      .then(response => response.json())
      .then(data => {
        const firstShip = data[0];
        const romanticQuote = firstShip["Romantic Quote"];
        setQuote(romanticQuote);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


    return (
      <div>
        <header>
          <img className="img"src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/baldurs-gate-3/d/d4/Astarion.jpg?width=1600"/>
          <h1 className="quoteTrial">{quote}</h1>
        <Navbar/>
        </header>
        <h1 className="text">This is the Astarion page</h1>
      </div>
    );
  }
  
  export default Astarion;