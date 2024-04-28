import { PicType } from '@models/types'
import { removeFromFavoritesAction, setAsFavoriteAction } from '@store/favorites/actions'
import { AppDispatch, AppState } from '@store/index'
import { isIdInFavorites } from '@utils/isIdInFavorites'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type UseClickFavsReturnType = {
    clickHandker: () => void
    isfav: boolean
}

export const useClickFavs = (item: PicType): UseClickFavsReturnType => {
    const dispath = useDispatch<AppDispatch>()
    const favs: PicType[] = useSelector((state: AppState) => state.favs.list)
    const isfav = useMemo(() => isIdInFavorites(item.id, favs), [favs])

    const clickHandker = () => {
        isfav ? dispath(removeFromFavoritesAction(item.id)) : dispath(setAsFavoriteAction(item))
    }

    return {
        clickHandker,
        isfav,
    }
}
