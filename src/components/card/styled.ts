import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'


export const StyledCard = styled.div`
    flex: 0 1 33%;
    padding: 0 15px;

    @media screen and (max-width: 1210px) and (min-width: 780px) {
        flex: 0 1 50%;

        &:last-child {
            margin: -25px auto 0;
            flex: 0 1 70%;
        }
    }

    @media screen and (max-width: 780px) {
        flex: 0 1 100%;
        padding: 0;

        &:not(:first-child) {
            margin: -20px 0 0 0;
        }
    }
`

export const StyledDescriptionWrapper = styled.div`
    max-width: calc(100% - 50px);
    transform: translate(25px, -50%);

    & > div {
        padding: 32px 24px;
        border: 1px solid ${palette.GRAY_COLOR};
    }

    @media screen and (max-width: 1240px) {
        & > div {
            padding: 25px 19px;
        }
    }
`

export const StyledImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
    height: 480px;

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
    }
`
