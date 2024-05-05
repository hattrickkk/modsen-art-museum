import React from 'react'
import Layout from '@components/layout'
import { Route, Routes } from 'react-router-dom'
import * as paths from '@constants/paths'
import { ROUTES } from '@constants/routes'
import NotFoundPage from '@pages/notFoundPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={paths.HOME_PAGE} element={<Layout />}>
                {ROUTES.map((el, i) => (
                    <Route key={i} path={el.path} element={el.component()} />
                ))}
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes
