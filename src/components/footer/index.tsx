import React from 'react'
import { StyledFooter, StyledFooterInner } from './styled'
import { StyledContainer } from '@styles/styles'

import logo from '@assets/logo.svg'
import modsen from '@assets/modsen.svg'
import { Link } from 'react-router-dom'
import { MODSEN_URL } from '@constants/dataConstants'
import * as paths from '@constants/paths'

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <StyledFooterInner>
                    <Link to={paths.HOME_PAGE}>
                        <img src={logo} alt='logo' />
                    </Link>
                    <a href={MODSEN_URL} target='blank'>
                        <img src={modsen} alt='modsen' />
                    </a>
                </StyledFooterInner>
            </StyledContainer>
        </StyledFooter>
    )
}

export default Footer
