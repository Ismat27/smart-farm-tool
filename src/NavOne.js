import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './components/Logo'

const NavOne = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleClick = () => {
            setOpenMenu(prev => !prev)
    }
  return (
    <Wrapper>
        <div className='page-header'>
            <Logo />
            <div
                className={openMenu ? "menu menu-open" : "menu"}
                onClick={handleClick}
            >
                <div className="first"></div>
                <div className="middle"></div>
                <div className="last"></div>
            </div>
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

const Wrapper = styled.header`
.page-header {
    display: flex;
    justify-content: space-between;
}
.menu {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
}
.first,
.middle,
.last {
    background-color: var(--deep-green);
    height: 4px;
    border-radius: 50px;
    box-shadow: 0px 0.4px 0.8px rgba(255, 255, 255, 0.3);
    transition: all 500ms ease-in-out;
    width: 24px;
}
.menu-open .first {
    transform: translateY(8px) rotate(45deg);
}
.menu-open .middle {
    width: 0px;
}
.menu-open .last {
    transform: translateY(-8px) rotate(-45deg);
}
.menu-open {
    .first, .middle, .last {
        margin-bottom: 0;
    }
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