import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'
import Hamburger from './Hamburger'

const NavOne = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleClick = () => {
            setOpenMenu(prev => !prev)
    }
  return (
    <Wrapper className=''>
        <div className='page-header'>
            <Logo />
            <Hamburger open={openMenu} handleClick={handleClick} />
        </div>
        <nav className={openMenu? 'nav nav-open': 'nav'}>
            <ul className={openMenu? 'nav-items open': 'nav-items'}>
                <li className='nav-item'>
                    <NavLink className={'nav-link'}>about us</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={'nav-link'}>pricing</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={'nav-link'}>blog</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={'nav-link'} to={'/login'}>sign in</NavLink>
                </li>
                <li className='nav-item styled'>
                    <NavLink className={'nav-link'}>try for free</NavLink>
                </li>
            </ul>
        </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 90%;
margin: auto;
.page-header {
    display: flex;
    justify-content: space-between;
}
.nav {
    ${'' /* text-align: center; */}
    padding-left: 20px;
    background-color: var(--light-green);
    height: 0;
    overflow: hidden;
    transition: all 500ms ease-in-out;
}
.nav-open {
    height: 150px;
}
.nav-items {
    padding-top: 1rem;
    li {
        padding: 5px 0;
    }
} 
.nav-link {
    color: white;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.2rem;
}
@media (min-width: 768px) {
    padding-left: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
.nav {
    padding-left: 0px;
    height: auto;
    display: grid;
    place-items: center;
}
.nav-items {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-top: 0;
    li {
        padding: 0;
    }
}
li.styled {
    padding: 10px;
    border-radius: 5px;
    background-color: var(--deep-green);
    a {
        color: white;
    }
}
.menu {
    display: none;
}

}
@media (min-width: 992px) {
    padding-left: 50px;
    display: grid;
    grid-template-columns: 40% 60%;
    .nav {
        display: block;
        padding-left: 50px;
    }
}
`
export default NavOne