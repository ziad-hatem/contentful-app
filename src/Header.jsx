import React from 'react'
import mainImg from './assets/undraw_content_re_33px.svg'
import './header.css'

const Header = () => {
  return (
      <div className="header">
          <div className="text">
              <h1>Contentful CMS</h1>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                  exercitationem voluptates repudiandae ipsam nulla laudantium asperiores
              </p>
          </div>
          <div className="photos">
              <img src={mainImg} alt="girl and Browser" />
          </div>
      </div>
  )
}

export default Header