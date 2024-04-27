import React from 'react'
import { StyledFooter, StyledFooterInner } from './styled'
import { StyledContainer } from '@styles/styles'

import logo from '@assets/logo.svg'
import modsen from '@assets/modsen.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <StyledFooterInner>
                    <img src={logo} alt='logo' />
                    <img src={modsen} alt='modsen' />
                </StyledFooterInner>
            </StyledContainer>
        </StyledFooter>
    )
}

export default Footer
