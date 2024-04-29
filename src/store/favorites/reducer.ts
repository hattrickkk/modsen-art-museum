import { PicType } from '@models/picture'
import { FavPicsActionType, FavPicsStateType } from './types'
import { FavPicsActionNames } from './actions'

const initValue: FavPicsStateType = {
    list: [],
}

export const favReducer = (state: FavPicsStateType = initValue, action: FavPicsActionType): FavPicsStateType => {
    switch (action.type) {
        case FavPicsActionNames.SET_AS_FAVORITE:
            return {
                list: [...state.list, action.payload as PicType],
            }
        case FavPicsActionNames.REMOVE_FROM_FOVORITE:
            return {
                list: state.list.filter(el => el.id !== (action.payload as number)),
            }
        case FavPicsActionNames.REMOVE_ALL:
            return {
                list: [],
            }
        default:
            return state
    }
}
