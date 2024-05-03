import { PicType } from '@customTypes/picture'

export type FavPicsStateType = {
    list: PicType[]
}

export type FavPicsActionType = {
    type: string
    payload?: PicType | number
}
