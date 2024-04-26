import { PicType } from '@models/types'

export const isIdInFavorites = (id: number, favArr: PicType[]) => {
    return !!favArr.find(el => el.id === id)
}
