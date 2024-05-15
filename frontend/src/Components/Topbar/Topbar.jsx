import React from 'react'
import './Topbar.css'

function Topbar() {
  return (
    <div className="top-bar">
    <div className="container-fluid">
      <div className="top-bar__content">
        <div className="top-bar__right">
          <ul className="top-bar__menu">
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">
                آموزش HTML
              </a>
            </li>
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">
                آموزش CSS
              </a>
            </li>
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">
                آموزش جاوا اسکریپت
              </a>
            </li>
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">
                آموزش استرپ
              </a>
            </li>
          </ul>
        </div>

        <div className="top-bar__left">
          <div className="top-bar__email">
            <a href="#" className="top-bar__email-text top-bar__link">
              sabzlearn@gmail.com
            </a>
            <i className="fas fa-envelope top-bar__email-icon"></i>
          </div>
          <div className="top-bar__phone">
            <a href="#" className="top-bar__phone-text top-bar__link">
              09921558293
            </a>
            <i className="fas fa-phone top-bar__phone-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Topbar