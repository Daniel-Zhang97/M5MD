import React, { useState, useEffect } from 'react'

export const Searchpage = () => {
  const [initialMap, setInitialMap] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/getInitialImage')
      .then((response) => {
        if (response.ok) {
          return response.blob()
        } else {
          throw new Error('Failed to retrieve the image')
        }
      })
      .then((imageBlob) => {
        const imageUrl = URL.createObjectURL(imageBlob)
        setInitialMap(imageUrl)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <div>Search testv222222</div>
      {initialMap && <img src={initialMap} alt="Map" />}
    </>
  )
}

export default Searchpage
