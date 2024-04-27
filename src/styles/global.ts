import { createGlobalStyle } from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const GlobalStyles = createGlobalStyle`
	body{
		font-family: "Lexend Deca", sans-serif;
		font-weight: 400;
		font-size: 16px;
		background-color: ${palette.BACK_COLOR};
	}
`
