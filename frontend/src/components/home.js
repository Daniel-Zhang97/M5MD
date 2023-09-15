import React from 'react'

export const Home = () => {
  return (
    <div className="home-container">
      <div className="frontpage-info-container">
        <div className="frontpage-header-container">
          <h1>Property Management Auckland</h1>
        </div>
        <div className="frontpage-description-container">
          <p>
            Our platform offers a seamless and user-friendly experience,
            designed to connect prospective buyers and renters with their ideal
            properties. Our intuitive search filters, interactive maps, and
            detailed property profiles provide in-depth information, ensuring
            you make an informed decision.
          </p>
        </div>
      </div>
      <div className="frontpage-image-container">
        <img
          src="./images/homepage.jpg"
          className="front-page-image"
          alt="Front Page Image"
        />
        <div className="property-listing-link-container">
          <a className="property-listing-anchor" href="/search">
            VIEW PROPERTY LISTINGS
          </a>
        </div>
      </div>
      <div className="homepage-footer-container">
        <div className="homepage-footer-subsection-container"></div>
      </div>
    </div>
  )
}
