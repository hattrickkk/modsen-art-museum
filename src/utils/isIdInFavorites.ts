import { PicType } from '@models/picture'

export const isIdInFavorites = (id: number, favArr: PicType[]) => {
    return !!favArr.find(el => el.id === id)
}
