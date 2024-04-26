import React from 'react'

import { Outlet } from 'react-router-dom'
import { StyledMain, StyledPageWrapper } from './styled'
import { StyledContainer } from '@styles/styles'

const Layout = () => {
    return (
        <StyledPageWrapper>
            <StyledContainer>
                <header>header</header>
            </StyledContainer>
            <StyledMain>
                <Outlet />
            </StyledMain>
            <StyledContainer>
                <footer>footer</footer>
            </StyledContainer>
        </StyledPageWrapper>
    )
}

export default Layout
