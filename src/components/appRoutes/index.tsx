import React from 'react'
import Layout from '@components/layout'
import HomePage from '@pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from '@pages/FavoritesPage'
import SinglePicturePage from '@pages/SinglePicturePage'
import SearchPage from '@pages/SearchPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path=':pageNumber' element={<HomePage />} />
                <Route path='pictures/favorite' element={<FavoritesPage />} />
                <Route path='picture/:picId' element={<SinglePicturePage />} />

                <Route path='search' element={<SearchPage />} />
                <Route path='search/:searchPageNumber' element={<SearchPage />} />

                <Route path='*' element={<div>NOT FOUND</div>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
