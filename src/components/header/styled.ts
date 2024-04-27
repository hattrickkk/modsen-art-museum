import styled from 'styled-components'

export const StyledHeader = styled.header`
    padding: 32px 0;
    background: linear-gradient(to right, #343333, #484848, #282828);
    position: fixed;
    z-index: 100;
    width: 100%;

    @media screen and (max-width: 470px) {
        padding: 25px 0;
    }
`
export const StyledHeaderLogo = styled.div`
    position: relative;
    z-index: 90;

    @media screen and (max-width: 470px) {
        & > a > img {
            display: block;
            max-height: 50px;
        }
    }
`
