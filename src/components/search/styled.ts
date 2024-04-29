import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const StyledInputWrapper = styled.div`
    width: 100%;
    position: relative;

    svg {
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 16px;
    }
`
