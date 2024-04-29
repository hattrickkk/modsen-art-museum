import { PicType } from '@models/picture'

export type FavPicsStateType = {
    list: PicType[]
}

export type FavPicsActionType = {
    type: string
    payload?: PicType | number
}
