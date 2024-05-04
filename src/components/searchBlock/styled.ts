import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledSearchBlockWrapper = styled.div`
    padding: 80px 0 0 0;
`

export const StyledSearchBlock = styled.div`
    position: relative;
    width: 760px;
    margin: 0 auto;

    @media ${breakpoints.MEDIA_QUERY_TABLET_EXTRA_LARGE} {
        width: 100%;
    }
`

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

export const StyledSearchInput = styled.input`
    background: ${palette.DARK_GRAY_COLOR};
    padding: 23px 55px 23px 16px;
    width: 100%;
    border-radius: 16px;
`

export const StyledPreviewWrapper = styled.div<{ $open: boolean }>`
    width: 100%;
    background-color: ${palette.DARK_GRAY_COLOR};
    position: absolute;
    padding: 20px 20px 10px;
    border-radius: 16px;
    z-index: 80;
    max-height: 559px;
    overflow-y: scroll;
    margin: 20px 0 0 0;
    display: ${props => (props.$open ? 'block' : 'none')};

    & > *:not(:last-child) {
        margin: 0 0 20px 0;
    }

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        max-height: 529px;
    }
`

export const StyledPreviewViewAll = styled.div`
    text-align: center;
    padding: 20px;
    cursor: pointer;
`

