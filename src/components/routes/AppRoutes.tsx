import Card from '@components/card/Card'
import Layout from '@components/layout/Layout'
import SmallCard from '@components/smallCard/SmallCard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index />
                <Route path='pictures/favorite' />

                <Route path='*' />
            </Route>
        </Routes>
    )
}

export default AppRoutes
