import React from 'react'
import styled from 'styled-components'
import { links } from '../data/sidebar';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';
import profileImg from '../images/profile-img.png'
import Hamburger from './Hamburger';

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <Wrapper className={isSidebarOpen? 'sidebar sidebar-open': 'sidebar'}>
        <div className='sidebar-header'>
            <p><img src={profileImg} alt='john doe' /> John Doe</p>
            <Hamburger open={isSidebarOpen} handleClick={closeSidebar} />
        </div>
        <ul className='links'>
            {
                links.map((link) => {
                    const {id, text, url, icon} = link
                    return (
                        <li key={id} className='link'>
                            <NavLink to={url} onClick={closeSidebar}>
                                {icon} {text}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
.menu {
    background: white;
    padding: 5px;
}
min-height: 100vh;
background-color: var(--deep-green);
padding: 40px 10px;
.sidebar-header {
    margin-bottom: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    button {
        border: none;
    }
    svg {
        background-color: var(--deep-green);
        color: #FFFFFF;
        font-size: 40px;
    }
    p {
        display: flex;
        align-items: center;
        color: #FFFFFF;
        font-size: 20px;
        text-transform: capitalize;
        gap: 10px;
        font-weight: 600;
        font-size: 30px;
    }
}
.link {
    margin-bottom: 15px;
}
.links a {
    border-radius: 0 10px 10px 0;
    font-weight: 700;
    max-width: 200px;
    display: flex;
    align-items: center;
    gap: 15px;
    color: #FFFFFF;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    padding: 1rem 1rem 1rem .4rem;
    transition: var(--transition);
    svg {
        font-size: 40px;
    }
}
.links a:hover, a.active {
  background: #FFFFFF;
  color: var(--light-green);
}
@media (min-width: 768px) {
    max-width: 350px;
}
@media (min-width: 992px) {
    max-width: 300px;
    position: unset;
    transform: translate(0%);
    button {
        display: none;
    }
}
`
export default Sidebar