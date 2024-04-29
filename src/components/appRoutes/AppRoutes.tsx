import React from 'react'
import Layout from '@components/layout/Layout'
import HomePage from '@pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from '@pages/favoritesPage/FavoritesPage'
import SinglePicturePage from '@pages/SinglePicturePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path=':pageNumber' element={<HomePage />} />
                <Route path='pictures/favorite' element={<FavoritesPage />} />
                <Route path='picture/:picId' element={<SinglePicturePage />} />

                <Route path='*' element={<div>NOT FOUND</div>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
