import { Action, Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'
import { ThunkAction, thunk } from 'redux-thunk'
import { favReducer } from './favorites/reducer'
import { burgerMenuReducer } from './burgerMenu/reducer'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { singlePicReducer } from './singlePic/reducer'
import { SinglePicStateType } from './singlePic/types'
import { searchReducer } from './search/reducer'
import { SearchStateType } from './search/types'
import { searchPreviewReducer } from './searchPreview/reducer'

const rootReducer = combineReducers({
    favs: favReducer,
    burgerMenu: burgerMenuReducer,
    singlePicture: singlePicReducer as Reducer<SinglePicStateType>,
    search: searchReducer as Reducer<SearchStateType>,
    searchPreview: searchPreviewReducer,
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
