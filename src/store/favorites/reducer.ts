import { PicType } from '@models/types'
import { FavPicsActionType, FavPicsStateType } from './types'
import { FavPicsActionNames } from './actions'

const initValue: FavPicsStateType = {
    list: [
        {
            id: 11393,
            title: 'Panel (Furnishing Fabric)',
            author: 'China, Guangzhou (Canton) or Macao',
            isPublic: true,
            image: '3e381d5a-3eac-e158-9b1e-8d65b78e2303',
        },
    ],
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
