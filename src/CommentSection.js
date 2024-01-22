import React, { useState, useEffect } from 'react'

function CommentSection() {
  const [comments, setComments] = useState([])
  const [inputValue, setInputValue] = useState('')

  
  useEffect(() => {
    fetchComments()
  }, [])

  
  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:3000/ships')
      const jsonData = await response.json()
      setComments(jsonData.ships || [])
    } catch (error) {
      console.error(error)
    }
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/ships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue }),
      })

      if (response.ok) {
        setInputValue('')
        const newComment = { Name: 'Anonymous', text: inputValue }
        setComments([...comments, newComment])
      } else {
        console.error('Failed to submit comment')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Who do you think I should pick?</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.Name}: {comment.text}</p>
            <hr />
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  )
}

export default CommentSection