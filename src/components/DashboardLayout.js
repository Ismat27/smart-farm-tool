import React from 'react'
import Sidebar from './Sidebar'
import Logo from './Logo'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Hamburger from './Hamburger'

import { useGlobalContext } from './context'

const DashboardLayout = () => {
    const {isSidebarOpen, openSidebar} = useGlobalContext()
  return (
    <Wrapper>
        <Sidebar />
        <div className='page-container'>
            <div className='header'>
                <Hamburger open={isSidebarOpen} handleClick={openSidebar} />
                <Logo />
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
${'' /* max-width: 1200px;
margin: auto; */}
background-color: var(--white);
.page-container {
    flex: auto;
    padding: 10px 10px;
}
.header {
    display: flex;
    justify-content: space-between;
}
@media (min-width: 992px) {
    display: flex;
    .header {
        justify-content: flex-end;
    }
    .menu {
        display: none;
    }
    .header img {
        width: 300px;
    }
}
`

export default DashboardLayout