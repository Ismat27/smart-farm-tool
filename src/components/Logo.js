import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'

const Logo = () => {
  return (
    <Link to={'/'}>
        <img className='logo-img' src={logo} alt='smart farm tools' />
    </Link>
  )
}

export default Logo