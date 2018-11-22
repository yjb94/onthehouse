import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-size:16px;
        font-family: 'Noto Serif KR', sans-serif;
        font-weight: 400;
    }

    body {
        margin: 0;
    }

    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }

    textarea, input { 
        border: none;
        outline: none; 
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        /* box-shadow: 0 0 0 30px white inset; */
        transition: background-color 5000s ease-in-out 0s;
    }
`