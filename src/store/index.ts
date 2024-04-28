import { Action, Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'
import { ThunkAction, thunk } from 'redux-thunk'
import { picsReducer } from './pics/reducer'
import { favReducer } from './favorites/reducer'
import { otherPicsReducer } from './otherPics/reducer'
import { burgerMenuReducer } from './burgerMenu/reducer'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PicsStateType } from './pics/types'
import { OtherPicsStateType } from './otherPics/types'

const rootReducer = combineReducers({
    pics: picsReducer as Reducer<PicsStateType>,
    otherPics: otherPicsReducer as Reducer<OtherPicsStateType>,
    favs: favReducer,
    burgerMenu: burgerMenuReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favs'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(thunk),
})

export const persistor = persistStore(store)
export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>
