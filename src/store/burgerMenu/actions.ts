import { BurgerMenuActionType } from './types'

export const burgerMenuActionSNames = {
    OPEN_MENU: 'OPEN_MENU',
    CLOSE_MENU: 'CLOSE_MENU',
}

export const openBurgerMenuAction = (): BurgerMenuActionType => {
    return {
        type: burgerMenuActionSNames.OPEN_MENU,
    }
}

export const closeBurgerMenuAction = (): BurgerMenuActionType => {
    return {
        type: burgerMenuActionSNames.CLOSE_MENU,
    }
}
