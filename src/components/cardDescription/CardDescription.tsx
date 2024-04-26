import React, { useCallback, useMemo } from 'react'
import {
    StyledAvailabilityInfo,
    StyledDescription,
    StyledIcon,
    StyledParagraph,
    StyledTextContainer,
    StyledTitle,
} from './styled'
import { Flex } from '@styles/flexStyles'
import SaveIcon from '@ui/saveIcon/SaveIcon'
import { PicType } from '@models/types'
import { AppDispatch, AppState } from '@store/index'
import { removeFromFavoritesAction, setAsFavoriteAction } from '@store/favorites/actions'
import { useDispatch, useSelector } from 'react-redux'
import { isIdInFavorites } from '@utils/isIdInFavorites'

type PropsType = {
    small?: boolean
    item: PicType
}

const CardDescription = ({ small, item }: PropsType) => {
    const dispath = useDispatch<AppDispatch>()
    const favs: PicType[] = useSelector((state: AppState) => state.favs.list)
    const isfav = useMemo(() => isIdInFavorites(item.id, favs), [favs])

    const clickHandker = () => {
        isfav ? dispath(removeFromFavoritesAction(item.id)) : dispath(setAsFavoriteAction(item))
    }

    return (
        <StyledDescription>
            <Flex $alignitems='center'>
                <StyledTextContainer $small={small ? small : false}>
                    <StyledTitle>{item.title}</StyledTitle>
                    <StyledParagraph>{item.author}</StyledParagraph>
                    <StyledAvailabilityInfo>{item.isPublic ? 'Public' : 'Proprietary'}</StyledAvailabilityInfo>
                </StyledTextContainer>
                <StyledIcon onClick={clickHandker} $faved={isfav}>
                    <SaveIcon />
                </StyledIcon>
            </Flex>
        </StyledDescription>
    )
}

export default CardDescription
