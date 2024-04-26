import { PicType } from '@models/types'
import { FavPicsActionType } from './types'

export const FavPicsActionNames = {
    SET_AS_FAVORITE: 'SET_AS_FAVORITE',
    REMOVE_FROM_FOVORITE: 'REMOVE_FROM_FOVORITE',
    REMOVE_ALL: 'REMOVE_ALL',
}

export const setAsFavoriteAction = (item: PicType): FavPicsActionType => {
    return {
        type: FavPicsActionNames.SET_AS_FAVORITE,
        payload: item,
    }
}

export const removeFromFavoritesAction = (id: number): FavPicsActionType => {
    return {
        type: FavPicsActionNames.REMOVE_FROM_FOVORITE,
        payload: id,
    }
}

export const removeAllFromFavorites = (): FavPicsActionType => {
    return {
        type: FavPicsActionNames.REMOVE_ALL,
    }
}