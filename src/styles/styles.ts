import { styled } from 'styled-components'

export const StyledWrapper = styled.div`
    overflow: hidden;
    min-height: 100%;
`
export const StyledContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px;
`

export const StyledPage = styled.div`
    margin: 250px 0 0 0;

    @media screen and (max-width: 980px) {
        margin: 200px 0 0 0;
    }

    @media screen and (max-width: 500px) {
        margin: 180px 0 0 0;
    }
`
