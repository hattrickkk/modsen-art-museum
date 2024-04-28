import React from 'react'
import { Outlet } from 'react-router-dom'
import { StyledMain, StyledPageWrapper } from './styled'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'

const Layout = () => {
    return (
        <StyledPageWrapper>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <Footer />
        </StyledPageWrapper>
    )
}

export default Layout
