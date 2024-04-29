import { searchPreviewActionType } from './types'

export const seacrhPreviewActionNames = {
    SHOW_PREVIEW: 'SHOW_PREVIEW',
    HIDE_PREVIEW: 'HIDE_PREVIEW',
}

export const showSearchPreciewAction = (): searchPreviewActionType => {
    return {
        type: seacrhPreviewActionNames.SHOW_PREVIEW,
    }
}

export const hideSearchPreviewAction = (): searchPreviewActionType => {
    return {
        type: seacrhPreviewActionNames.HIDE_PREVIEW,
    }
}
