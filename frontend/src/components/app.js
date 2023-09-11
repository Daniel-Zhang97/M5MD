import React, { useState } from 'react'

function App() {
  const [showPicture, setShowPicture] = useState(false)

  const togglePicture = () => {
    setShowPicture(!showPicture)
  }

  const imgSource = './images/cat.jpg'

  return (
    <>
      <div>Hello!</div>
      {showPicture && <img src={imgSource} alt="A cat" />}
      <button onClick={togglePicture}>
        {showPicture ? 'Hide Picture' : 'Show Picture'}
      </button>
    </>
  )
}

export default App
