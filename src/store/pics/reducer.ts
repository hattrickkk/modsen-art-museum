import { PicsActionType, PicsStateType } from './types'

const initValue: PicsStateType = {
    list: [],
}

export const picsReducer = (state: PicsStateType = initValue, action: PicsActionType): PicsStateType => {
    switch (action.type) {
        case 'SET_PICS':
            return {
                ...state,
                list: action.payload.data.map(el => ({
                    id: el.id,
                    title: el.title,
                    isPublic: el.is_public_domain,
                    author: el.artist_display.split('\n').length !== 1 ? el.artist_display.split('\n')[0] : null,
                    image: `${action.payload.config.iiif_url}/${el.image_id}/full/843,/0/default.jpg`,
                })),
            }
        default:
            return state
    }
}
