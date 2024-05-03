import React from 'react'
import Layout from '@components/layout'
import HomePage from '@pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from '@pages/FavoritesPage'
import SinglePicturePage from '@pages/SinglePicturePage'
import SearchPage from '@pages/SearchPage'
import * as paths from '@constants/paths'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={paths.HOME_PAGE} element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path={paths.HOME_PAGE_WITH_ENDPOINT} element={<HomePage />} />
                <Route path={paths.FAVORITES_PAGE} element={<FavoritesPage />} />
                <Route path={paths.SINGLE_PAGE_WITH_ENDPOINT} element={<SinglePicturePage />} />
                <Route path={paths.SEARCH_PAGE_WITH_ENDPOINT} element={<SearchPage />} />

                <Route path={paths.NOT_FOUND_PAGE} element={<div>NOT FOUND</div>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
