import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'
import { favReducer } from './favorites/reducer'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { searchReducer } from './search/reducer'
import { SearchStateType } from './search/types'

const rootReducer = combineReducers({
    favs: favReducer,
    search: searchReducer as Reducer<SearchStateType>,
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
        }),
})

export const persistor = persistStore(store)
export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
