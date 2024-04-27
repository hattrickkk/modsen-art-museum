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
