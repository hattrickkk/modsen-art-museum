import { RouteType } from '@customTypes/routes'
import HomePage from '@pages/HomePage'
import FavoritesPage from '@pages/FavoritesPage'
import SinglePicturePage from '@pages/SinglePicturePage'
import SearchPage from '@pages/SearchPage'
import * as paths from '@constants/paths'

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
