import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import BurgerMenuContextProvider from '@components/burgerMenuContextProvider'
import SearchPreviewContextProvider from '@components/searchPreviewContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <BurgerMenuContextProvider>
                    <SearchPreviewContextProvider>
                        <App />
                    </SearchPreviewContextProvider>
                </BurgerMenuContextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
