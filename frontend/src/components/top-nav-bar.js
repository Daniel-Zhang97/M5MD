import React from 'react'
import { BsTelephoneInbound } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'

function TopNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      <div className="navbar">
        <ul className="nav-links">
          <li>
            <a href="/index">
              <img
                src="./images/header-logo.jpg"
                className="headerImg"
                alt="Metro logo"
              />
            </a>
          </li>
          <li>
            <a href="/index">Home</a>
          </li>
          <li className="dropdownmenu">
            <a href="#" onClick={toggleDropdown}>
              Services
            </a>
            <div className={`dropDown ${isDropdownOpen ? 'show' : ''}`}>
              <div className="drop-menu-container">
                <a className="drop-menu-item">Properties</a>
              </div>
              <div className="drop-menu-container">
                <a className="drop-menu-item">Rentals</a>
              </div>
            </div>
          </li>
          <li>
            <a href="/Tenants">Tenants</a>
          </li>
          <li>
            <a href="/News">News</a>
          </li>
          <li>
            <a href="/About-us">About Us</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/FAQs">FAQs</a>
          </li>
          <li>
            <div className="phone-number">
              <BsTelephoneInbound />
              <p>09 391 4642</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopNavBar
