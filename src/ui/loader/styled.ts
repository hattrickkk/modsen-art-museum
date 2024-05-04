import styled, { keyframes } from 'styled-components'
import * as palette from '@constants/stylesConstants'

const loaderAnimation = keyframes`
    0% {
        transform: scale(1) rotate(0);
    }
    50%{
        transform: scale(1.3) rotate(180deg);
    }
    100%{
        transform: scale(1) rotate(360deg);
    }
`

export const StyledLoaderWrapper = styled.div`
    padding: 65px 0;
`
export const StyledLoader = styled.div`
    height: 120px;
    width: 120px;
    border: 2px solid ${palette.ORANGE_COLOR};
    border-radius: 50%;
    border-left-color: transparent;
    animation: ${loaderAnimation} 0.8s linear infinite;
`
