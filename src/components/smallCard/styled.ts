import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledCardDescriptionWrapper = styled.div`
    flex: 1 1 200px;
`

export const StyledSmallCardWrapper = styled.div`
    flex: 0 1 33%;
    padding: 0 15px;

    @media screen and (max-width: 1210px) and (min-width: 780px) {
        flex: 0 1 50%;

        &:last-child:nth-child(odd) {
            flex: 0 1 70%;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 780px) {
        flex: 0 1 100%;
        padding: 0;
    }
`

export const StyledSmallCard = styled.div`
    border: 1px solid ${palette.GRAY_COLOR};
    padding: 16px;
    margin: 0 0 25px 0;
`

export const StyledImageWrapper = styled.div`
    width: 80px;
    padding: 0 8px 0 0;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
    }

    @media screen and (max-width: 1210px) {
        width: 135px;
        padding: 0 17px 0 0;
    }

    @media screen and (max-width: 862px) and (min-width: 780px) {
        display: none;
    }

    @media screen and (max-width: 430px) {
        display: none;
    }
`
