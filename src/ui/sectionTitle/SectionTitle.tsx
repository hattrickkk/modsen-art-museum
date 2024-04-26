import { StyledTitle } from '@components/cardDescription/styled'
import React from 'react'
import { StyledSectionLabel, StyledSectionSubtitle, StyledSectionTitle } from './styled'

type PropsType = {
    title: string
    subtitle: string
}

const SectionTitle = ({ title, subtitle }: PropsType) => {
    return (
        <StyledSectionTitle>
            <StyledSectionLabel>{subtitle}</StyledSectionLabel>
            <StyledSectionSubtitle>{title}</StyledSectionSubtitle>
        </StyledSectionTitle>
    )
}

export default SectionTitle
