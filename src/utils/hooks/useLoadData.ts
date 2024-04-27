import { PicType } from '@models/types'
import store, { AppState, AppDispatch } from '@store/index'
import { loadOtherPics } from '@store/otherPics/actions'
import { loadPics } from '@store/pics/actions'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const useLoadPics = (isDefaultPics: boolean): PicType[] => {
    const stateName: keyof AppState = isDefaultPics ? 'pics' : 'otherPics'
    const dispath = useDispatch<AppDispatch>()

    const listOfPics = useSelector((state: AppState) => state[stateName].list)

    useEffect(() => {
        dispath(isDefaultPics ? loadPics() : loadOtherPics())
    }, [])

    return listOfPics
}
