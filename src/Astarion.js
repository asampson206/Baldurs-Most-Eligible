import Navbar from './Navbar';
import "./Astarion.css"
import React, { useState, useEffect } from "react";


function Astarion() {
    return (
      <div>
        <header>
          <img className="img"src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/baldurs-gate-3/d/d4/Astarion.jpg?width=1600"/>
        <Navbar/>
        </header>
        <h1 className="text">This is the Astarion page</h1>
      </div>
    );
  }
  
  export default Astarion;