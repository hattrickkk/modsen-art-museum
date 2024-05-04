import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledTitle = styled.h1`
    font-weight: 700;
    font-size: 64px;
    text-transform: capitalize;
    text-align: center;
    max-width: 680px;
    margin: 0 auto;
    line-height: 75px;

    span {
        color: ${palette.DARK_ORANGE_COLOR};

        svg {
            margin: 0 30px 8px 0;
            transform: scale(2.3);
        }
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_EXTRA_LARGE} {
        font-size: 55px;
        line-height: 65px;

        span svg {
            margin: 0 25px 4px 0;
            transform: scale(2.1);
        }
    }

    @media ${breakpoints.MEDIA_QUERY_PHONE_NORMAL} {
        font-size: 50px;
        line-height: 60px;

        span svg {
            transform: scale(1.9);
        }
    }
`
