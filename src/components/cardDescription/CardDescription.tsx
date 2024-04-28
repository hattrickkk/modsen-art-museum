import React, { useCallback, useMemo } from 'react'
import { StyledAvailabilityInfo, StyledDescription, StyledParagraph, StyledTextContainer, StyledTitle } from './styled'
import { Flex } from '@styles/flexStyles'
import SaveIcon from '@ui/saveIcon/SaveIcon'
import { PicType } from '@models/types'
import { AppDispatch, AppState } from '@store/index'
import { removeFromFavoritesAction, setAsFavoriteAction } from '@store/favorites/actions'
import { useDispatch, useSelector } from 'react-redux'
import { isIdInFavorites } from '@utils/isIdInFavorites'
import SaveButton from '@ui/saveButton/SaveButton'
import { useClickFavs } from '@utils/hooks/useClickFav'

type PropsType = {
    small?: boolean
    item: PicType
}

const CardDescription = ({ small, item }: PropsType) => {
    const { isfav, clickHandker } = useClickFavs(item)

    return (
        <StyledDescription>
            <Flex $alignitems='center'>
                <StyledTextContainer $small={small ? small : false}>
                    <StyledTitle>{item.title}</StyledTitle>
                    <StyledParagraph>{item.author}</StyledParagraph>
                    <StyledAvailabilityInfo>{item.isPublic ? 'Public' : 'Proprietary'}</StyledAvailabilityInfo>
                </StyledTextContainer>
                <SaveButton onClick={clickHandker} isFav={isfav} />
            </Flex>
        </StyledDescription>
    )
}

export default CardDescription
