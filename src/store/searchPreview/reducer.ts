import { seacrhPreviewActionNames } from './actions'
import { searchPreviewActionType, searchPreviewStateType } from './types'

const initValue: searchPreviewStateType = {
    isOpen: false,
}

export const searchPreviewReducer = (
    state: searchPreviewStateType = initValue,
    action: searchPreviewActionType
): searchPreviewStateType => {
    switch (action.type) {
        case seacrhPreviewActionNames.SHOW_PREVIEW:
            return {
                isOpen: true,
            }
        case seacrhPreviewActionNames.HIDE_PREVIEW:
            return {
                isOpen: false,
            }
        default:
            return state
    }
}
