import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

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

        &:first-child {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {
            margin: 0 30px 0 0;
            transform: scale(2.3);
        }
    }

    @media screen and (max-width: 980px) {
        font-size: 55px;
        line-height: 65px;

        span svg {
            margin: 0 25px 0 0;
            transform: scale(2.1);
        }
    }

    @media screen and (max-width: 500px) {
        font-size: 50px;
        line-height: 60px;

        span svg {
            transform: scale(1.9);
        }
    }
`
