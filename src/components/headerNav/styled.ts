import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledHeaderNav = styled.nav`
    font-family: Inter;
    font-size: 18px;
    display: flex;
    align-items: center;
`

export const StyledHeaderMenu = styled.ul<{ $open: boolean }>`
    display: flex;

    @media screen and (max-width: 780px) {
        position: absolute;
        background: linear-gradient(to right, #343333, #484848, #282828);
        left: ${props => (props.$open ? '0' : '110vw')};
        top: 0;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        padding: 300px 0 0 0;
        align-items: center;
        transition: all ease-in 0.3s;
    }
`

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

export const StyledHeaderBurger = styled.div<{ $open: boolean }>`
    cursor: pointer;
    display: none;
    margin: 0 0 0 20px;
    z-index: 90;
    width: 60px;
    height: 60px;
    position: relative;
    transition: all linear 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    span,
    span::before,
    span::after {
        width: 60px;
        height: 3px;
        border-radius: 10px;
        transition: all linear 0.2s;
        background-color: ${palette.ORANGE_COLOR};
    }

    span::before,
    span::after {
        content: '';
        position: absolute;
    }

    span {
        ${props => props.$open && 'background: rgba(0, 0, 0, 0.0);'}
        display: block;
        transform: translateY(25px);

        &::before {
            top: ${props => (props.$open ? '0px' : '-18px')};
            transform: ${props => (props.$open ? 'rotate(-45deg)' : '')};
        }

        &::after {
            top: ${props => (props.$open ? '0px' : '18px')};
            transform: ${props => (props.$open ? 'rotate(45deg)' : '')};
        }
    }

    @media screen and (max-width: 780px) {
        display: block;
    }
`
