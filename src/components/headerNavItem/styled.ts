import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledHeaderMenuItem = styled.li`
    font-size: 20px;

    &:hover > a {
        color: ${palette.ORANGE_COLOR};
    }

    &:active > a {
        color: ${palette.DARK_ORANGE_COLOR};
    }

    &:active > a svg path {
        stroke: ${palette.DARK_ORANGE_COLOR};
    }

    &:last-child {
        margin: 0 0 0 50px;
    }

    svg path {
        stroke: ${palette.ORANGE_COLOR};
        transition: all linear 0.3s;
    }

    a {
        display: flex;
        align-items: center;
        padding: 5px;
        color: ${palette.WHITE_COLOR};
        transition: all linear 0.3s;

        span {
            padding: 0 0 0 7px;
        }
    }

    @media screen and (max-width: 980px) {
        font-size: 22px;

        a span {
            padding: 0 0 0 13px;
        }

        svg {
            transform: scale(1.3);
        }
    }

    @media screen and (max-width: 780px) {
        font-size: 34px;
        padding: 10px;

        a span {
            padding: 0 0 0 30px;
        }

        &:last-child {
            margin: 0;
        }

        &:not(:last-child) {
            margin: 0 0 40px 0;
        }

        svg {
            transform: scale(2);
        }
    }
`
