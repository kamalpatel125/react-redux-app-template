import React from 'react'
import './footer.scss'

const Footer = () => (
  <div className='footer'>
    <span className='footer__year'>@{new Date().getFullYear()}</span>
  </div>
)

export default Footer
