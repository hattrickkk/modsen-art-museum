import { SinglePicActionType, SinglePicStateType } from './types'

const initValue: SinglePicStateType = {
    item: {
        author: '',
        authorNationality: '',
        creditLine: '',
        dateDisplay: '',
        dimensions: '',
        exhibitionHistory: '',
        id: 0,
        image: '',
        isPublic: false,
        title: '',
    },
}

export const singlePicReducer = (
    state: SinglePicStateType = initValue,
    action: SinglePicActionType
): SinglePicStateType => {
    switch (action.type) {
        case 'SET_SINGLE_PIC':
            const arr = action.payload.data.artist_display.split('\n')
            return {
                ...state,
                item: {
                    id: action.payload.data.id,
                    title: action.payload.data.title,
                    isPublic: action.payload.data.is_public_domain,
                    creditLine: action.payload.data.credit_line,
                    dateDisplay: action.payload.data.date_display,
                    dimensions: action.payload.data.dimensions,
                    exhibitionHistory: action.payload.data.exhibition_history,
                    author: arr[0],
                    authorNationality: arr[1],
                    image: `${action.payload.config.iiif_url}/${action.payload.data.image_id}/full/843,/0/default.jpg`,
                },
            }
        default:
            return state
    }
}
