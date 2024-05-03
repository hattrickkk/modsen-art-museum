import React from 'react'
import { Outlet } from 'react-router-dom'
import { StyledMain, StyledPageWrapper } from './styled'
import Footer from '@components/footer'
import Header from '@components/header'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@components/errorFallback'

const Layout = () => {
    return (
        <StyledPageWrapper>
            <Header />
            <StyledMain>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Outlet />
                </ErrorBoundary>
            </StyledMain>
            <Footer />
        </StyledPageWrapper>
    )
}

export default Layout
