import { lazy } from 'react'
import { RouteType } from '@customTypes/routes'
import * as paths from '@constants/paths'

const HomePage = lazy(() => import('@pages/HomePage'))
const FavoritesPage = lazy(() => import('@pages/FavoritesPage'))
const SinglePicturePage = lazy(() => import('@pages/SinglePicturePage'))
const SearchPage = lazy(() => import('@pages/SearchPage'))

export const ROUTES: RouteType[] = [
    {
        path: paths.HOME_PAGE,
        component: HomePage,
    },
    {
        path: paths.HOME_PAGE_WITH_ENDPOINT,
        component: HomePage,
    },
    {
        path: paths.FAVORITES_PAGE,
        component: FavoritesPage,
    },
    {
        path: paths.SINGLE_PAGE_WITH_ENDPOINT,
        component: SinglePicturePage,
    },
    {
        path: paths.SEARCH_PAGE_WITH_ENDPOINT,
        component: SearchPage,
    },
]
