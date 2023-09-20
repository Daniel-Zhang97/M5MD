import React, { useState, useEffect } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { LuBedDouble } from 'react-icons/lu'
import { LuBath } from 'react-icons/lu'
import { LiaAppleAltSolid } from 'react-icons/lia'
import { RiTreeLine } from 'react-icons/ri'
import ReactSlider, { ReactSliderProps } from 'react-slider'
import styled from 'styled-components'
import { IoBed } from 'react-icons/io5'
import { FaBath } from 'react-icons/fa'
import { BiSolidCarGarage } from 'react-icons/bi'
import Switch from 'react-switch'
import { IoLibraryOutline } from 'react-icons/io5'
import { PiBarbell } from 'react-icons/pi'
import { BsPeople } from 'react-icons/bs'
import { MdOutlineSportsFootball } from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoWifiSharp } from 'react-icons/io5'
import { FaFaucetDrip } from 'react-icons/fa6'
import { PiPlugsFill } from 'react-icons/pi'
import { MdPropaneTank } from 'react-icons/md'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiFillCaretDown } from 'react-icons/ai'

export const Searchpage = () => {
  const [backgroundMap, setBackgroundMap] = useState(null)
  const [searchOverlayActive, setSearchOverlay] = useState(true)
  let [allData, setAllData] = useState([])
  const [suburb, setSuburb] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [sliderValue, setSliderValue] = useState([1, 100])
  const [bedrooms, setBedrooms] = useState(0)
  const [bathrooms, setBathrooms] = useState(0)
  const [carports, setCarports] = useState(0)
  const [extraMustHaves, setExtraMustHaves] = useState('')
  const [activePropertyType, setActivePropertyType] = useState('')
  const [hasAirCon, setAirCon] = useState(false)
  const [hasFireplace, setFirePlace] = useState(false)
  const [hasUnderfloorHeating, setUnderfloor] = useState(false)
  const [hasHotTub, setHotTub] = useState(false)
  const [hasCarpet, setCarpet] = useState(false)
  const [isNorthFacing, setNorth] = useState(false)
  const [isAnimalFriendly, setAnimals] = useState(false)
  const [hasHealthyHomeStandard, setHealthy] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [gymActive, setGymActive] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [matchedData, setMatchedData] = useState([])
  const [expandedInfo, setExpandedInfo] = useState(false)
  const [expandedInfo1, setExpanded1] = useState(0)

  const handleButtonClick = (text) => {
    setSearchText(text)
  }

  const handleGymActive = () => {
    setGymActive(!gymActive)
  }

  const handlePageNumberChange = (value) => {
    setPageNumber(value)
    console.log(pageNumber)
  }

  const handleSuburbChange = (e) => {
    setSuburb(e.target.value)
  }

  const handlePropertyTypeClick = (type) => {
    setActivePropertyType(type)
    setPropertyType(type)
  }

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
        setAllData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const toggleSearchOverlay = () => {
    setSearchOverlay(!searchOverlayActive)
    console.log(suburb)
    // console.log(
    //   'this is alldata 1 matchpercentate:' + allData[1].matchPercentage
    // )
    console.log('this is matchedData:' + matchedData)
  }

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue)
  }

  const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 30px;
  `

  const StyledThumbText = styled.div`
    font-size: 18px;
    text-align: center;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    color: #e4343b;
  `

  const StyledThumb = styled.div`
    top: -15px;
    height: 40px;
    width: 40px;
    background: linear-gradient(to bottom right, #e4343b, #ef868a);
    background-clip: padding-box;
    padding: 10px;
    color: white;
    border-radius: 50%;
    cursor: grab;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `

  const Thumb = (props, state) => (
    <StyledThumb {...props}>
      <StyledThumbText style={{ left: `${state.percent}%` }}>
        ${state.valueNow}
      </StyledThumbText>
    </StyledThumb>
  )

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2
        ? '#ffffff'
        : props.index === 1
        ? '#e4343b'
        : '#ffffff'};
    border-radius: 999px;
    border: 2px solid #e4343b;
  `

  const Track = (props, state) => <StyledTrack {...props} index={state.index} />

  const incrementBedrooms = () => {
    setBedrooms(bedrooms + 1)
  }

  const decrementBedrooms = () => {
    if (bedrooms > 0) {
      setBedrooms(bedrooms - 1)
    }
  }

  const incrementBathrooms = () => {
    setBathrooms(bathrooms + 1)
  }

  const decrementBathrooms = () => {
    if (bathrooms > 0) {
      setBathrooms(bathrooms - 1)
    }
  }

  const incrementCarports = () => {
    setCarports(carports + 1)
  }

  const decrementCarports = () => {
    if (carports > 0) {
      setCarports(carports - 1)
    }
  }

  function calculateMatchPercentage(data, storageArray) {
    data.map((item, index) => {
      let matchPercentage = 100

      if (suburb && item.suburb !== suburb) {
        matchPercentage -= 20
      }
      if (propertyType && item.type !== propertyType) {
        matchPercentage -= 20
      }
      if (sliderValue[0] > item.price || sliderValue[1] < item.price) {
        matchPercentage -= 20
      }

      if (hasAirCon && !item.hasAirCon) {
        matchPercentage -= 10
      }
      if (hasFireplace && !item.hasFireplace) {
        matchPercentage -= 10
      }

      if (bedrooms > item.bedrooms) {
        matchPercentage -= 10
      }
      if (bathrooms > item.bathrooms) {
        matchPercentage -= 10
      }
      if (carports > item.carports) {
        matchPercentage -= 10
      }
      matchPercentage = Math.max(0, Math.min(100, matchPercentage))

      storageArray[index] = matchPercentage
    })
  }

  const handleUpdateMatchPercentages = () => {
    const updatedMatchedData = calculateMatchPercentage(allData)
    setMatchedData(updatedMatchedData)
  }

  return (
    <>
      <div className="search-page-container">
        <div className="search-page-filter-and-items-container">
          <a
            onClick={() => {
              toggleSearchOverlay()
            }}
          >
            <div className="search-page-filter-anchor-container">
              <div className="search-page-filter-text">FILTER</div>
              <AiOutlineDown className="search-page-filter-v-icon" />
            </div>
          </a>
          {allData.map((item, index) => (
            <div
              className={`search-page-result-container ${
                expandedInfo ? 'hide' : ''
              }`}
              key={index}
              onClick={() => {
                setExpandedInfo(!expandedInfo)
                setExpanded1(index)
              }}
            >
              <div className="search-page-result-thumbnail-container">
                <AiOutlineHeart className="search-page-result-heart-icon" />
                <img
                  className="search-page-result-thumbnail"
                  src={`data:image/png;base64,${encodeBase64FromArray(
                    item.topDownView.data
                  )}`}
                  alt={`Image ${index}`}
                />
              </div>
              <div className="search-page-result-descriptions-container">
                <div className="search-page-result-match-and-key-container">
                  <h4>
                    {matchedData[index] > 0
                      ? `${matchedData[index]}% match`
                      : null}
                  </h4>
                  <p>${item.price}/wk</p>
                </div>
                <div className="search-page-result-address-container">
                  {item.streetAddress}
                </div>
                <div className="search-page-result-icons-container">
                  <div className="search-page-result-icons-container-left">
                    <LuBedDouble className="search-page-result-icon" />
                    <p>{item.bedrooms}</p>
                    <LuBath className="search-page-result-icon" />
                    <p>{item.bathrooms}</p>
                  </div>
                  <div className="search-page-result-icons-container-right">
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
          {allData.map((item, index) => (
            <div
              className={`search-page-result-container absolute expandedinfo ${
                !expandedInfo || expandedInfo1 !== index ? 'hide' : ''
              }`}
              key={index}
              onClick={() => {
                setExpandedInfo(!expandedInfo)
                setExpanded1(index)
              }}
            >
              <div className="search-page-result-thumbnail-container">
                <AiOutlineHeart className="search-page-result-heart-icon" />
                <img
                  className="search-page-result-thumbnail"
                  src={`data:image/png;base64,${encodeBase64FromArray(
                    item.topDownView.data
                  )}`}
                  alt={`Image ${index}`}
                />
              </div>
              <div className="search-page-result-descriptions-container">
                <div className="search-page-result-match-and-key-container">
                  <h4>
                    {matchedData[index] > 0
                      ? `${matchedData[index]}% match`
                      : null}
                  </h4>
                  <p>${item.price}/wk</p>
                </div>
                <div className="search-page-result-address-container">
                  {item.streetAddress}
                </div>
                <div className="search-page-result-icons-container">
                  <div className="search-page-result-icons-container-left">
                    <LuBedDouble className="search-page-result-icon" />
                    <p>{item.bedrooms}</p>
                    <LuBath className="search-page-result-icon" />
                    <p>{item.bathrooms}</p>
                  </div>
                  <div className="search-page-result-icons-container-right">
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
          {allData[0] && (
            <div>
              <a>
                <img
                  className="mapview-circular roose"
                  src={`data:image/png;base64,${encodeBase64FromArray(
                    allData[0].topDownView.data
                  )}`}
                ></img>
              </a>
              <a>
                <img
                  className="mapview-circular southbridge"
                  src={`data:image/png;base64,${encodeBase64FromArray(
                    allData[1].topDownView.data
                  )}`}
                ></img>
              </a>
            </div>
          )}
        </div>
        <a
          className={`search-page-filter-function-whole-dimmer ${
            searchOverlayActive ? 'show-filter' : ''
          }`}
          onClick={toggleSearchOverlay}
        ></a>
        <div
          className={`search-page-filter-function-container fld ${
            pageNumber === 1 && searchOverlayActive ? 'show-filter' : ''
          }`}
        >
          <div className="search-page-filter-main-container flr">
            <div className="search-page-filter-function-subcontainer-left">
              <h4 className="m40">Find your match</h4>
              <div className="search-page-filter-function-location-container m40">
                <div className="search-page-filter-function-location-location-container searchborder">
                  <p>Location</p>
                  <form>
                    <input
                      type="text"
                      value={suburb}
                      onChange={handleSuburbChange}
                      placeholder="Enter Suburb"
                    />
                  </form>
                  <div>
                    <button
                      onClick={() => setSuburb('Southbridge')}
                      className="search-page-filter-function-location-button"
                    >
                      Southbridge
                    </button>
                    <button
                      onClick={() => setSuburb('Western Heights')}
                      className="search-page-filter-function-location-button"
                    >
                      Western Heights
                    </button>
                  </div>
                </div>
                <div className="search-page-filter-function-property-type-container">
                  <p>Property type</p>
                  <div className="search-page-filter-function-property-type-button-container">
                    <div>
                      <button
                        onClick={() => handlePropertyTypeClick('house')}
                        className={
                          activePropertyType === 'house'
                            ? 'active-property'
                            : ''
                        }
                      >
                        House
                      </button>
                      <p className="search-page-filter-function-property-type-annotation">
                        Fully Detached
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handlePropertyTypeClick('apartment')}
                        className={
                          activePropertyType === 'apartment'
                            ? 'active-property'
                            : ''
                        }
                      >
                        Apartment
                      </button>
                      <p className="search-page-filter-function-property-type-annotation">
                        Hi-Rise
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handlePropertyTypeClick('unit')}
                        className={
                          activePropertyType === 'unit' ? 'active-property' : ''
                        }
                      >
                        Unit
                      </button>
                      <p className="search-page-filter-function-property-type-annotation">
                        Low-Rise
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handlePropertyTypeClick('terrace')}
                        className={
                          activePropertyType === 'terrace'
                            ? 'active-property'
                            : ''
                        }
                      >
                        Terrace
                      </button>
                      <p className="search-page-filter-function-property-type-annotation">
                        Terraced Housing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="search-page-filter-function-price-range-container">
                  <p>Price Range</p>
                  <div className="slider-div">
                    <StyledSlider
                      max={1000}
                      minDistance={50}
                      onAfterChange={handleSliderChange}
                      defaultValue={sliderValue}
                      renderTrack={Track}
                      renderThumb={Thumb}
                    />
                  </div>
                  <div className="slider-lables flr">
                    <p>slide to adjust</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-page-filter-function-subcontainer-right">
              <div className="search-page-features-container">
                <div className="search-page-features-subcontainer">
                  <p>Property Features</p>
                  <div className="search-page-features-icons-container flr">
                    <div className="search-page-features-icons">
                      <IoBed />
                      <p>Bed</p>
                    </div>
                    <div className="search-page-features-icons">
                      <FaBath />
                      <p>Bath</p>
                    </div>
                    <div className="search-page-features-icons">
                      <BiSolidCarGarage />
                      <p>Carports</p>
                    </div>
                  </div>
                  <div className="search-page-features-icons-buttons-container flr searchborder">
                    <div className="flr search-page-features-icons-individual-container">
                      <button onClick={decrementBedrooms}>-</button>
                      <p>{bedrooms}</p>
                      <button onClick={incrementBedrooms}>+</button>
                    </div>
                    <div className="flr search-page-features-icons-individual-container">
                      <button onClick={decrementBathrooms}>-</button>
                      <p>{bathrooms}</p>
                      <button onClick={incrementBathrooms}>+</button>
                    </div>
                    <div className="flr search-page-features-icons-individual-container">
                      <button onClick={decrementCarports}>-</button>
                      <p>{carports}</p>
                      <button onClick={incrementCarports}>+</button>
                    </div>
                  </div>
                  <div className="search-page-features-must-haves-container">
                    <p>Extra Must Haves</p>
                    <form className="extra-must-haves-form">
                      <input
                        type="text"
                        placeholder="Keywords e.g. Outdoor Space"
                        value={extraMustHaves}
                        onChange={(e) => setExtraMustHaves(e.target.value)}
                      ></input>
                    </form>
                    <div>
                      <button
                        className="search-page-features-must-haves-button"
                        onClick={() => setExtraMustHaves('Two living rooms')}
                      >
                        Two living rooms
                      </button>
                      <button
                        className="search-page-features-must-haves-button"
                        onClick={() => setExtraMustHaves('Outdoor space')}
                      >
                        Outdoor space
                      </button>
                      <button
                        className="search-page-features-must-haves-button"
                        onClick={() => setExtraMustHaves('Balcony')}
                      >
                        Balcony
                      </button>
                    </div>
                  </div>
                  <div className="search-page-features-toggles-container searchborder flr">
                    <div className="toggles-subcontainer-left fld ">
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setAirCon(!hasAirCon)}
                          checked={hasAirCon}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>Air Conditioning</p>
                      </div>
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setFirePlace(!hasFireplace)}
                          checked={hasFireplace}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>Fireplace</p>
                      </div>
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setUnderfloor(!hasUnderfloorHeating)}
                          checked={hasUnderfloorHeating}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>Underfloor Heating</p>
                      </div>
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setHotTub(!hasHotTub)}
                          checked={hasHotTub}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>Hot Tub</p>
                      </div>
                    </div>

                    <div className="toggles-subcontainer-right fld ">
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setCarpet(!hasCarpet)}
                          checked={hasCarpet}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>Carpet</p>
                      </div>
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setNorth(!isNorthFacing)}
                          checked={isNorthFacing}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>North-Facing</p>
                      </div>
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setAnimals(!isAnimalFriendly)}
                          checked={isAnimalFriendly}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>Animal Friendly</p>
                      </div>
                      <div className="toggles-single-switch-container flr">
                        <Switch
                          onChange={() => setHealthy(!hasHealthyHomeStandard)}
                          checked={hasHealthyHomeStandard}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#F4AEB1"
                          onHandleColor="#e4343b"
                          offColor="#FCEBEB"
                          offHandleColor="#FCEBEB"
                          handleDiameter={28}
                          boxShadow="0 0 2px red"
                          width={50}
                          height={25}
                          className="toggle-switch-switch"
                        />
                        <p>Healthy Homes Standard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-page-filter-next-page-container flr">
            <div className="filter-next-page-icon-containers">
              <input
                type="radio"
                id="page-number-1"
                checked={pageNumber === 1}
                onChange={() => handlePageNumberChange(1)}
              />
              <input
                type="radio"
                id="page-number-2"
                checked={pageNumber === 2}
                onChange={() => handlePageNumberChange(2)}
              />
            </div>
            <button
              onClick={() => handlePageNumberChange(2)}
              className="search-page-filter-next-page-button debutt"
            >
              <p>NEXT</p>
            </button>
          </div>
        </div>
        <div
          className={`search-page-filter-function-container fld ${
            pageNumber === 2 && searchOverlayActive ? 'show-filter' : ''
          }`}
        >
          <div className="search-page-filter-main-container flr">
            <div className="search-page-filter-function-subcontainer-left">
              <h4 className="m40">Find your match</h4>
              <p className="search-page-2-description">
                “Input your customised criteria to discover your perfect match."{' '}
              </p>
              <div className="search-page-filter-function-location-container m40">
                <p>Local Amenities</p>
                <div className="local-amenities-icons-container fld">
                  <div className="local-amenities-icons-row-1 flr">
                    <button className="local-amenities-buttons fld">
                      <RiTreeLine />
                      <p>Parks</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <IoLibraryOutline />
                      <p>Library</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <LiaAppleAltSolid />
                      <p>Grocery</p>
                    </button>
                    <button
                      className={`local-amenities-buttons fld ${
                        gymActive ? 'hovered' : ''
                      }`}
                      onClick={handleGymActive}
                    >
                      <PiBarbell />
                      <p>Gym</p>
                    </button>
                  </div>
                  <div className="local-amenities-icons-row-2 flr">
                    <button className="local-amenities-buttons fld">
                      <BsPeople />
                      <p>Community Center</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <MdOutlineSportsFootball />
                      <p>Sports Centre</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <IoSchoolOutline />
                      <p>School</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <HiOutlineBuildingOffice2 />
                      <p>Work</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="search-page-filter-function-location-container m40">
                <p>Rent Includes</p>
                <div className="local-amenities-icons-container fld">
                  <div className="local-amenities-icons-row-1 flr">
                    <button className="local-amenities-buttons fld">
                      <IoWifiSharp />
                      <p>Wifi</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <FaFaucetDrip />
                      <p>Water</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <PiPlugsFill />
                      <p>Power</p>
                    </button>
                    <button className="local-amenities-buttons fld">
                      <MdPropaneTank />
                      <p>Gas</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-page-filter-function-subcontainer-right">
              <div className="search-page-features-container">
                <div className="search-page-features-subcontainer">
                  <button
                    className="debutt flr pushright previous-button"
                    onClick={() => handlePageNumberChange(1)}
                  >
                    <div className="">Previous</div>
                    <div className="previous-button-icon">
                      <AiOutlineLeft />
                    </div>
                  </button>
                </div>
              </div>
              <div
                className={`gympage fld ${
                  pageNumber === 2 && gymActive && searchOverlayActive
                    ? 'show-filter'
                    : ''
                }`}
              >
                <div>
                  <h4 className="gympage-headers">Specify Gym </h4>
                </div>
                <div>
                  <p className="gympage-small-descriptors">
                    Enter Specific Gym
                  </p>
                </div>
                <div>
                  <form className="gym-search-form">
                    <input
                      type="text"
                      placeholder="Keywords e.g. Outdoor Space"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    ></input>
                  </form>
                </div>
                <div className="gym-search-buttons">
                  <button
                    className="default-text-button"
                    onClick={() => handleButtonClick('City Fitness')}
                  >
                    City Fitness
                  </button>
                  <button
                    className="default-text-button"
                    onClick={() => handleButtonClick('Anytime Fitness')}
                  >
                    Anytime Fitness
                  </button>
                  <button
                    className="default-text-button"
                    onClick={() => handleButtonClick('Jetts')}
                  >
                    Jetts
                  </button>
                  <button
                    className="default-text-button"
                    onClick={() => handleButtonClick('Les Mills')}
                  >
                    Les Mills
                  </button>
                </div>
                <div className="gympage-headers">Or</div>
                <button
                  className="gym-search-buttons gympage-no-preference default-text-button"
                  onClick={() =>
                    handleButtonClick('Any “I don’t have a preference”')
                  }
                >
                  Any “I don’t have a preference”
                </button>
              </div>
            </div>
          </div>
          <div className="search-page-filter-next-page-container flr">
            <div className="filter-next-page-icon-containers">
              <input
                type="radio"
                id="page-number-1"
                checked={pageNumber === 1}
                onChange={() => handlePageNumberChange(1)}
              />
              <input
                type="radio"
                id="page-number-2"
                checked={pageNumber === 2}
                onChange={() => handlePageNumberChange(2)}
              />
            </div>
            <button
              onClick={() => (
                (allData = calculateMatchPercentage(allData, matchedData)),
                toggleSearchOverlay()
              )}
              className="search-page-filter-next-page-button debutt"
            >
              <p>FIND YOUR MATCH</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchpage
