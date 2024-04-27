import { burgerMenuActionSNames } from './actions'
import { BurgerMenuActionType, BurgerMenuStateType } from './types'

const initValue: BurgerMenuStateType = {
    isOpen: false,
}

export const burgerMenuReducer = (
    state: BurgerMenuStateType = initValue,
    action: BurgerMenuActionType
): BurgerMenuStateType => {
    switch (action.type) {
        case burgerMenuActionSNames.OPEN_MENU:
            return {
                isOpen: true,
            }
        case burgerMenuActionSNames.CLOSE_MENU:
            return {
                isOpen: false,
            }
        default:
            return state
    }
}
