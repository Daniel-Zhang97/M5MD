import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export const Home = () => {
  const [isTailoredServicesOpen, setIsTailoredServicesOpen] = useState(false)

  const toggleTailoredServices = () => {
    setIsTailoredServicesOpen(!isTailoredServicesOpen)
    console.log('working')
  }
  const [isPropertyAppraisal, setIsPropertyAppraisal] = useState(false)

  const togglePropertyAppraisal = () => {
    setIsPropertyAppraisal(!isPropertyAppraisal)
  }

  const [isChangeToMetro, setIsChangeToMetro] = useState(false)

  const toggleChangeToMetro = () => {
    setIsChangeToMetro(!isChangeToMetro)
  }

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
      <div className="homepage-expandable-information-container">
        <div className="homepage-expandable-subsection">
          <a
            onClick={toggleTailoredServices}
            className="homepage-expandable-subsection-toggler"
          >
            <div className="homepage-expandable-icon">
              <AiOutlinePlus />
            </div>
            <div className="homepage-expandable-subsection-text">
              Tailored Services
            </div>
          </a>
        </div>
        <div
          className={`homepage-dropdown-description ${
            isTailoredServicesOpen ? 'show-description' : ''
          }`}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="homepage-expandable-bottom-border"></div>
      </div>
      <div className="homepage-expandable-information-container">
        <div className="homepage-expandable-subsection">
          <a
            onClick={togglePropertyAppraisal}
            className="homepage-expandable-subsection-toggler"
          >
            <div className="homepage-expandable-icon">
              <AiOutlinePlus />
            </div>
            <div className="homepage-expandable-subsection-text">
              Property Appraisal
            </div>
          </a>
        </div>
        <div
          className={`homepage-dropdown-description ${
            isPropertyAppraisal ? 'show-description' : ''
          }`}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="homepage-expandable-bottom-border"></div>
      </div>

      <div className="homepage-expandable-information-container">
        <div className="homepage-expandable-subsection">
          <a
            onClick={toggleChangeToMetro}
            className="homepage-expandable-subsection-toggler"
          >
            <div className="homepage-expandable-icon">
              <AiOutlinePlus />
            </div>
            <div className="homepage-expandable-subsection-text">
              Change to Metro NZ Property Management Auckland
            </div>
          </a>
        </div>
        <div
          className={`homepage-dropdown-description ${
            isChangeToMetro ? 'show-description' : ''
          }`}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="homepage-expandable-bottom-border"></div>
      </div>
      <div className="homepage-footer-container">
        <div className="homepage-footer-subsection-container">chechceceeck</div>
      </div>
    </div>
  )
}
