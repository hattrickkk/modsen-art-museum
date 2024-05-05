import { LazyExoticComponent } from 'react'

export type RouteType = {
    path: string
    component: React.LazyExoticComponent<() => React.JSX.Element>
}
