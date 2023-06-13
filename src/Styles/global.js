import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        font-family: 'Gasoek One', sans-serif;
    }
`;

export default GlobalStyles;