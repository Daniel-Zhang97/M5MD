import React, { useState } from 'react'

function Datapush() {
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
      })

      if (response.status === 201) {
        console.log('Data saved successfully')
      } else {
        console.error('Failed to save data')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Save Data</button>
      </div>
      <div></div>
    </div>
  )
}

export default Datapush
