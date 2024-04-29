import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledSinglePicture = styled.div`
    display: flex;
    margin: 0 0 120px 0;

    @media screen and (max-width: 910px) {
        flex-direction: column;
        margin: 0 0 90px 0;
    }
`

export const StyledSinglePicImageWrapper = styled.div<{ $outline: boolean }>`
    width: 100%;
    overflow: hidden;
    flex: 0 0 450px;
    min-height: 500px;
    position: relative;
    border: ${props => (props.$outline ? `4px solid ${palette.ORANGE_COLOR}` : '')};

    div {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 60px;
        height: 60px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media screen and (max-width: 1045px) {
        flex: 0 0 400px;
    }

    @media screen and (max-width: 910px) {
        flex: 0 0 500px;
    }
`

export const StyledSinglePicDescriptionWrapper = styled.div`
    flex: 1 1 50%;
    padding: 0 0 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1045px) {
        padding: 0 0 0 55px;
    }

    @media screen and (max-width: 950px) {
        padding: 0 0 0 40px;
    }

    @media screen and (max-width: 910px) {
        padding: 40px 0 0 0;
    }
`