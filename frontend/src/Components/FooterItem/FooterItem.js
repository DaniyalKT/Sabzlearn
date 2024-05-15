import React, { Children } from 'react'
import './FooterItem.css'
function FooterItem({title , children}) {
  return (
    <div className='col-4'>
        <div className="footer-widgets__item">
            <span className="footer-widgets__title">{title}</span>
        </div>

        {children}

    </div>
  )
}

export default FooterItem