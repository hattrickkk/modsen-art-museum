import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledSortPanel = styled.div`
    background-color: ${palette.WHITE_COLOR};
    border: 2px solid ${palette.GRAY_COLOR};
    padding: 26px 24px 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -4px 25px;

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        margin: 0 0 25px 0;
        flex-direction: column;
    }
`

export const StyledSortFiltersWrapper = styled.div`
    padding: 20px;
    border: 2px solid ${palette.GRAY_COLOR};
    display: flex;
    position: relative;
    margin: 0 -8px;
    flex: 0 1 50%;

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        flex: 0 1 100%;

        &:not(:last-child) {
            margin: 0 -8px 30px;
        }
    }
`

export const StyledSortFiltersTitle = styled.h4`
    color: ${palette.DARK_ORANGE_COLOR};
    background-color: ${palette.WHITE_COLOR};
    font-size: 20px;
    position: absolute;
    top: -15px;
    padding: 5px 15px;
    left: 15px;
`

export const StyledSortFilters = styled.div`
    display: flex;
    padding: 0 8px;
    flex-wrap: wrap;
`
