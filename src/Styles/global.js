import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        /* @font-face {
		font-family: 'KCC';
		src: url('src/Font/KCC-Ganpan.ttf');
	} */
    }
`;
export default GlobalStyles;
