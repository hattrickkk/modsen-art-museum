import { OtherPicsActionType, OtherPicsStateType } from './types'

const initValue = {
    list: [],
}

export const otherPicsReducer = (
    state: OtherPicsStateType = initValue,
    action: OtherPicsActionType
): OtherPicsStateType => {
    switch (action.type) {
        case 'SET_OTHER_PICS':
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
