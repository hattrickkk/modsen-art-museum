import Card from '@components/card/Card'
import SmallCard from '@components/smallCard/SmallCard'

import { FlexContainer } from '@styles/flexStyles'
import { GlobalStyles } from '@styles/global'
import { NullStyles } from '@styles/nullStyles'
import React from 'react'

export const App = () => {
    return (
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <NullStyles />
            <GlobalStyles />

            <FlexContainer $gap={15}>
                <Card />
                <Card />
                <Card />
            </FlexContainer>

            <FlexContainer $gap={15}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </FlexContainer>
        </div>
    )
}
