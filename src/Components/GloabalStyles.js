import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        
    }
    body{
        /* font family */
        font-family: 'Noto Sans KR', sans-serif;    
    }
`;

export default globalStyle;
