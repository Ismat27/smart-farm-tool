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
            <div className='header page-center'>
                <Hamburger open={isSidebarOpen} handleClick={openSidebar} />
                <Logo />
            </div>
            <main className='page-center content'>
                <Outlet />
            </main>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
min-height: 100vh;
max-width: 1440px;
margin: auto;
background-color: var(--white);
.page-container {
    flex: auto;
}
.header {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
}
main {
    padding-bottom: 50px;
}

@media (min-width: 768px) {

}
@media (min-width: 992px) {
    display: flex;
    .header {
        justify-content: flex-end;
        padding-block: 30px 40px;
    }
    .menu {
        display: none;
    }
    .header img {
        width: 300px;
    }
    .page-center {
        max-width: 900px;
    }
}
`

export default DashboardLayout
