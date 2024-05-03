import CardsContainer from '@components/cardsContainer'
import { StyledContainer } from '@styles/styles'
import Button from '@ui/button/Button'
import SectionTitle from '@ui/sectionTitle/SectionTitle'
import React from 'react'
import { StyledFavoritesButtonWrapper, StyledFavoritesSection } from './styled'
import { AppDispatch, AppState } from '@store/index'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllFromFavorites } from '@store/favorites/actions'

const FavoritesSection = () => {
    const favs = useSelector((state: AppState) => state.favs.list)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <StyledFavoritesSection>
            <StyledContainer>
                <SectionTitle title='Your favorites list' subtitle='Saved by you' />

                <StyledFavoritesButtonWrapper>
                    <Button
                        value='Remove all from favorites'
                        onClick={() => {
                            dispatch(removeAllFromFavorites())
                        }}
                    />
                </StyledFavoritesButtonWrapper>

                <CardsContainer big={false} list={favs} />
            </StyledContainer>
        </StyledFavoritesSection>
    )
}

export default FavoritesSection
