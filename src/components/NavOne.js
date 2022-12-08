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
    <Wrapper className='nav-container page-center'>
        <div className='page-header'>
            <Logo />
            <Hamburger open={openMenu} handleClick={handleClick} />
        </div>
        <nav className={openMenu? 'nav nav-open': 'nav'}>
            <ul className={openMenu? 'nav-items open': 'nav-items'}>
                <li className='nav-item'>
                    <NavLink className={'nav-link'}>pricing</NavLink>
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
padding-top: 10px;
max-width: var(--home-max-width);
.page-header {
    display: flex;
    justify-content: space-between;
}
.nav {
    height: 0;
    overflow: hidden;
    transition: all 500ms ease-in-out;
}
.nav-open {
    height: 100px;
}
.nav-items {
    padding-top: 1rem;
    li {
        padding: 5px 0;
    }
} 
.nav-items.open {
    height: auto;
}
.nav-link {
    color: var(--deep-green);
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.2rem;
}
@media (min-width: 768px) {
.logo-img {
    width: 300px;
}
.nav {
    height: auto;
}
.nav-items {
    display: flex;
    align-items: center;
    gap: 40px;
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

`
export default NavOne