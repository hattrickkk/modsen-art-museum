import { PicType } from '@models/types'

export type FavPicsStateType = {
    list: PicType[]
}

export type FavPicsActionType = {
    type: string
    payload?: PicType | number
}
