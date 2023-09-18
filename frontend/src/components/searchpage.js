import React, { useState, useEffect } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { LuBedDouble } from 'react-icons/lu'
import { LuBath } from 'react-icons/lu'
import { LiaAppleAltSolid } from 'react-icons/lia'
import { RiTreeLine } from 'react-icons/ri'

export const Searchpage = () => {
  const [backgroundMap, setBackgroundMap] = useState(null)
  const [searchOverlayActive, setSearchOverlay] = useState(true)
  const [allData, setAllData] = useState([])

  function encodeBase64FromArray(array) {
    const binaryString = array.reduce((data, byte) => {
      return data + String.fromCharCode(byte)
    }, '')

    return btoa(binaryString)
  }

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
        console.log(imageBlob)
        const imageUrl = URL.createObjectURL(imageBlob)
        console.log(imageUrl)
        setBackgroundMap(imageUrl)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/getAllData')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to retrieve the collection')
        }
      })
      .then((data) => {
        // const updatedData = data.map((item) => {
        //   console.log(item.topDownView.data)
        //   if (item.topDownView) {
        //     const tempBlob = new Blob([item.topDownView.data], {
        //       type: 'image/png',
        //     })

        //     console.log(tempBlob)
        //     const tempURL = URL.createObjectURL(tempBlob)
        //     return {
        //       ...item,
        //       topDownView: tempURL,
        //     }
        //   }
        //   return item
        // })
        setAllData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const toggleSearchOverlay = () => {
    setSearchOverlay(!searchOverlayActive)
    console.log(allData[0].topDownView)
    console.log(allData[1].topDownView)
    allData[0].matchPercentage = 90
  }

  return (
    <>
      <div className="search-page-container">
        <div className="search-page-filter-and-items-container">
          <a onClick={toggleSearchOverlay}>
            <div className="search-page-filter-anchor-container">
              <div className="search-page-filter-text">FILTER</div>
              <AiOutlineDown className="search-page-filter-v-icon" />
            </div>
          </a>
          {allData.map((item, index) => (
            <div className="search-page-result-container" key={index}>
              <div
                key={index}
                className="search-page-result-thumbnail-container"
              >
                <AiOutlineHeart className="search-page-result-heart-icon" />
                <img
                  className="search-page-result-thumbnail"
                  src={`data:image/png;base64,${encodeBase64FromArray(
                    item.topDownView.data
                  )}`}
                  alt={`Image ${index}`}
                />
              </div>
              <div
                key={index}
                className="search-page-result-descriptions-container"
              >
                <div
                  key={index}
                  className="search-page-result-match-and-key-container"
                >
                  <h4>
                    {item.matchPercentage > 0
                      ? `${item.matchPercentage}% match`
                      : null}
                  </h4>
                  <p>${item.price}/wk</p>
                </div>
                <div
                  key={index}
                  className="search-page-result-address-container"
                >
                  {item.streetAddress}
                </div>
                <div key={index} className="search-page-result-icons-container">
                  <div
                    key={index}
                    className="search-page-result-icons-container-left"
                  >
                    <LuBedDouble className="search-page-result-icon" />
                    <p>{item.bedrooms}</p>
                    <LuBath className="search-page-result-icon" />
                    <p>{item.bathrooms}</p>
                  </div>
                  <div
                    key={index}
                    className="search-page-result-icons-container-right"
                  >
                    {item.isNorthFacing ? (
                      <LiaAppleAltSolid className="search-page-result-icon" />
                    ) : null}
                    {item.hasHealthyHomeStandard ? (
                      <RiTreeLine className="search-page-result-icon" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="search-page-background-map-container">
          {backgroundMap && (
            <img
              src={backgroundMap}
              alt="Map"
              className="search-page-background-map"
            />
          )}
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Searchpage
