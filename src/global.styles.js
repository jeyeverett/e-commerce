import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        padding: 20px 40px;
        background-color: #ADCBDC;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    body::-webkit-scrollbar{
        width: 8px;
        background-color: transparent;
    }
    
    body::-webkit-scrollbar-thumb{
        background-color: rgba(0,0,0,0.7);
        border-radius: 20px;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;