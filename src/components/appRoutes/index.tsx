import React, { Suspense, memo } from 'react'
import Layout from '@components/layout'
import { Route, Routes } from 'react-router-dom'
import * as paths from '@constants/paths'
import { NOT_FOUND_ROUTES, ROUTES } from '@constants/routes'
import Loader from '@ui/loader'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={paths.HOME_PAGE} element={<Layout />}>
                {ROUTES.map((el, i) => (
                    <Route key={i} path={el.path} element={<el.component />} />
                ))}
            </Route>
            {NOT_FOUND_ROUTES.map((el, i) => (
                <Route
                    key={i}
                    path={el.path}
                    element={
                        <Suspense fallback={<Loader />}>
                            <el.component />
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default memo(AppRoutes)
