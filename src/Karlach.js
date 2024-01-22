import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Button from './Button';
import RomanticQuote from './Quote';

function Karlach() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/ships')
      .then(response => response.json())
      .then(data => {
        const firstShip = data[1];
        const romanticQuote = firstShip["Romantic Quote"];
        setQuote(romanticQuote);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header>
        <img className="img" src="https://dotesports.com/wp-content/uploads/2023/08/karlach-in-bg3.jpg" alt="Karlach"/>
        <h1 className="text">{quote}</h1>
        
      </header>
      <h1 className="text">This is Karlach, former Right Hand of Avernus (the Devil), avid dancer, and a Tiefling warrior. Sold to Avernus and cast into the first circle of Hell, she fought for 10 years before escaping. Despite this, she is noted for her bubbly personality and friendly nature. Being one of the few monogamous companions, she did not get my girlfriend's vote but will she have mine?</h1>
      <Navbar/>
      <Button className="button"/>
    </div>
    
  );
}

export default Karlach;