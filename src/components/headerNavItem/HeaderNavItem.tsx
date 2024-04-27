import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { StyledHeaderMenuItem } from './styled'

type PropsType = {
    onClick: () => void
    path: string
    children: ReactNode
}

const HeaderNavItem = ({ onClick, path, children }: PropsType) => {
    return (
        <StyledHeaderMenuItem onClick={onClick}>
            <Link to={path}>{children}</Link>
        </StyledHeaderMenuItem>
    )
}

export default HeaderNavItem
