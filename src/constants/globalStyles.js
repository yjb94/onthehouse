import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 400;
        src: url('../assets/fonts/AvenirNextLTPro-Regular.otf');
    }

    @font-face {
        font-family: 'Sloop Script';
        font-style: normal;
        font-weight: 400;
        src: url('../assets/fonts/sloopscript.ttf');
    }

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
        transition: opacity 0.2s ease-out;
    }
    button:focus {
        outline: none;
    }
    button:hover {
        opacity:0.5;
    }

    textarea, input { 
        border: none;
        outline: none; 
        resize: none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        /* box-shadow: 0 0 0 30px white inset; */
        transition: background-color 5000s ease-in-out 0s;
    }
`