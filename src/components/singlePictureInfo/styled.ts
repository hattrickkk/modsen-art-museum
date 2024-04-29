import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledSinglePicInfo = styled.div`
    @media screen and (max-width: 910px) {
        margin: 0 0 80px 0;
    }

    @media screen and (max-width: 620px) {
        margin: 0 0 50px 0;
    }
`

export const StyledSinglePicTitle = styled.h1`
    font-size: 32px;
    line-height: 38px;
    margin: 0 0 35px 0;
`

export const StyledSinglePicAuthor = styled.p`
    font-size: 24px;
    margin: 0 0 18px 0;
    color: ${palette.ORANGE_COLOR};
`

export const StyledSinglePicDate = styled.p`
    font-weight: 700;
`
