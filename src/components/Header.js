import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src='.//clogo.png' alt='logo'/>
        </div>
        <div className='heading'> <h1>Cryptocurrency Tracker</h1></div>
    </div>
  )
}

export default Header;