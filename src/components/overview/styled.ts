import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledOverview = styled.div``

export const StyledOverviewTitle = styled.h2`
    font-size: 32px;
    margin: 0 0 35px 0;

    @media screen and (max-width: 620px) {
        font-size: 28px;
        margin: 0 0 24px 0;
    }
`

export const StyledOverviewMenu = styled.ul`
    & > *:not(:last-child) {
        margin: 0 0 10px 0;
    }
`

export const StyledOverviewItem = styled.li<{ $isBig?: boolean }>`
    ${props =>
        props.$isBig &&
        `& span:last-child{
            max-height: 150px;
            display: block;
            overflow-y: scroll;
            padding: 0 7px 0 0;
        }`}

    line-height: 18px;
    & span:first-child {
        margin: 0 10px 0 0;
        color: ${palette.ORANGE_COLOR};
    }
`
