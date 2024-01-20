import Navbar from './Navbar';
import React, { useState, useEffect } from "react";

function Shadowheart() {
    return (
      <div>
        <header>
          <img className="img" src="https://www.dexerto.com/cdn-cgi/image/width=750,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/11/10/Shadowheart-Baldurs-Gate-3-Official-Artwork-Artifact.jpg"/>
        <Navbar/>
        </header>
        <h1 className="text">This is the Shadowheart page</h1>
      </div>
    );
  }
  
  export default Shadowheart;