import Navbar from './Navbar';
import "./Karlach"
import React, { useState, useEffect } from "react";


function Karlach() {

    return (
      <div>
        <header>
          <img className="img" src="https://dotesports.com/wp-content/uploads/2023/08/karlach-in-bg3.jpg"/>
        
        <Navbar/>
        </header>
        <h1 className="text">This is Karlach, former Right Hand of Avernus (the Devil), avid dancer, and a Tiefling warrior</h1>
      </div>
    );
  }
  
  export default Karlach;