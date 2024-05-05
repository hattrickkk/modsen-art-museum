import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledNotFoundPage = styled.div`
    height: 100%;
    margin: 25vh auto 0;
`
export const Styled404 = styled.h1`
    color: ${palette.DARK_ORANGE_COLOR};
    font-weight: 900;
    font-size: 240px;
    letter-spacing: 0.2em;
    margin: 0 0 80px 0;

    @media ${breakpoints.MEDIA_QUERY_TABLET_NORMAL} {
        font-size: 180px;
        margin: 0 0 60px 0;
    }

    @media ${breakpoints.MEDIA_QUERY_PHONE_NORMAL} {
        font-size: 140px;
        letter-spacing: 0.1em;
    }
`

export const StyledNotFoundPageTitle = styled.h2`
    font-size: 50px;
    font-family: Inter;
    margin: 0 0 40px 0;
    font-weight: 500;

    @media ${breakpoints.MEDIA_QUERY_TABLET_NORMAL} {
        font-size: 40px;
    }

    @media ${breakpoints.MEDIA_QUERY_PHONE_NORMAL} {
        font-size: 32px;
        margin: 0 0 30px 0;
    }
`

export const StyledNotFoundPageText = styled.p`
    font-size: 20px;
    margin: 0 0 40px 0;
    text-align: center;
`
