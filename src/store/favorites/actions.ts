import { PicType } from '@customTypes/picture'
import { FavPicsActionType } from './types'
import { REMOVE_ALL_FROM_FAVORITE, REMOVE_FROM_FAVORITE, SET_AS_FAVORITE } from '@constants/actionNames'

export const setAsFavoriteAction = (item: PicType): FavPicsActionType => {
    return {
        type: SET_AS_FAVORITE,
        payload: item,
    }
}

export const removeFromFavoritesAction = (id: number): FavPicsActionType => {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: id,
    }
}

export const removeAllFromFavorites = (): FavPicsActionType => {
    return {
        type: REMOVE_ALL_FROM_FAVORITE,
    }
}
