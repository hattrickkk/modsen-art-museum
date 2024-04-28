import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledFavoritesText = styled.p`
    margin: 70px 0;
    text-align: center;
    font-size: 20px;

    a {
        transition: all linear 0.3s;
        color: ${palette.ORANGE_COLOR};

        &:hover {
            color: ${palette.DARK_ORANGE_COLOR};
        }
    }
`
