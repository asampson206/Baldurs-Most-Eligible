import React, { useState, useEffect } from 'react';


function Button() {
  const [result, setResult] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/ships')
      .then(response => response.json())
      .then(data => {
        setResult(data[2].Result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleButtonClick = () => {
    alert(result);
  };

  return (
    <div>
     
      <button onClick={handleButtonClick}>Show Result</button>
    </div>
  )
}

export default Button