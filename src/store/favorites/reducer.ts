import { PicType } from '@customTypes/picture'
import { FavPicsActionType, FavPicsStateType } from './types'
import { REMOVE_ALL_FROM_FAVORITE, REMOVE_FROM_FAVORITE, SET_AS_FAVORITE } from '@constants/actionNames'

const initValue: FavPicsStateType = {
    list: [],
}

export const favReducer = (state: FavPicsStateType = initValue, action: FavPicsActionType): FavPicsStateType => {
    switch (action.type) {
        case SET_AS_FAVORITE:
            return {
                list: [...state.list, action.payload as PicType],
            }
        case REMOVE_FROM_FAVORITE:
            return {
                list: state.list.filter(el => el.id !== (action.payload as number)),
            }
        case REMOVE_ALL_FROM_FAVORITE:
            return {
                list: [],
            }
        default:
            return state
    }
}
