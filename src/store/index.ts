import { Action, combineReducers, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware, { ThunkAction, thunk } from 'redux-thunk'
import { picsReducer } from './pics/reducer'

const rootReducer = combineReducers({
    pics: picsReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>
