import React from 'react'
import { useState, useEffect } from 'react';
import {createBrowserRouter, RouteProvider} from 'react-router-dom'




function App(){
    const [users, setUsers] = useState([])
    useEffect(() =>{
        fetch("http://localhost:3001")
          .then(r => r.json())
          .then(data => setUsers(data))
          .catch(error => console.error(error))
      }, [])

    return (
        <div>
        <h2>Welcome to Baldur's Most Eligible!</h2>
        <h2>Several of my girlfriend's favorite's have been gathered</h2>
        </div>
    )
}





export default App

