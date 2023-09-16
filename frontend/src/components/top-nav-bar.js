import React from 'react'
import { BsTelephoneInbound } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'

function TopNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      <div className="navbar">
        <a href="/index" className="headerImg-anchor">
          <img
            src="./images/header-logo.jpg"
            className="headerImg"
            alt="Metro logo"
          />
        </a>
        <a href="/" className="navbar-item">
          Home
        </a>
        <a href="#" className="navbar-item">
          Tenants
        </a>
        <a href="#" className="navbar-item">
          News
        </a>
        <a href="#" className="navbar-item">
          About Us
        </a>
        <a href="#" className="navbar-item">
          Contact
        </a>
        <a
          href="#"
          onClick={toggleDropdown}
          className="drop-down-anchor navbar-item"
        >
          <div className="drop-down-menu">
            Services
            <div className="drop-down-icon-container">
              <AiOutlineDown className="drop-down-icon" />
            </div>
            <div className={`dropDown ${isDropdownOpen ? 'show' : ''}`}>
              <div className="drop-menu-container">
                <a className="drop-menu-item" href="/search">
                  Properties
                </a>
              </div>
              <div className="drop-menu-container">
                <a className="drop-menu-item">Rentals</a>
              </div>
              <div className="drop-menu-container">
                <a className="drop-menu-item">Purchase Planning</a>
              </div>
            </div>
          </div>
        </a>
        <a href="/FAQs" className="navbar-item">
          FAQs
        </a>
        <div className="navbar-right">
          <div className="phone-number-container">
            <BsTelephoneInbound className="phone-number-icon" />
            <p className="phone-number">09 391 4642</p>
          </div>
          <div className="navbar-contact">
            <IoPersonOutline className="navbar-contact-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavBar
