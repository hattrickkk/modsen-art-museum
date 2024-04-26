import styled from 'styled-components'

type FlexPropsType = Partial<{
    $justifycontent: string
    $flexdirection: string
    $flexwrap: string
    $alignitems: string
    $gap: number
}>

export const Flex = styled.div<FlexPropsType>`
    display: flex;
    flex-direction: ${props => props.$flexdirection || ' row'};
    flex-wrap: ${props => props.$flexwrap || ' wrap'};
    justify-content: ${props => props.$justifycontent || 'space-between'};
    align-items: ${props => props.$alignitems || ' stretch'};
`


export const FlexContainer = styled(Flex)`
    margin: 0 -${props => props.$gap || '15'}px;
    flex-wrap: nowrap;
`

export const FlexItem = styled.div<{ $gap: number; $percent: number }>`
    padding: 0 ${props => props.$gap}px;
    flex: 0 1 ${props => props.$percent}%;
`
