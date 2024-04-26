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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 780px) {
        margin: 0;
    }
`

