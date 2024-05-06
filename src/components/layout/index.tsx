import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledMain, StyledPageWrapper } from './styled'
import Footer from '@components/footer'
import Header from '@components/header'
import ErrorBoundary from '@components/errorBoundary'
import Loader from '@ui/loader'

const Layout = () => {
    return (
        <StyledPageWrapper>
            <Header />
            <StyledMain>
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </StyledMain>
            <Footer />
        </StyledPageWrapper>
    )
}

export default Layout
