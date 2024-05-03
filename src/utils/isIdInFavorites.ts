import { PicType } from '@customTypes/picture'

export const isIdInFavorites = (id: number, favArr: PicType[]) => {
    return !!favArr.find(el => el.id === id)
}
