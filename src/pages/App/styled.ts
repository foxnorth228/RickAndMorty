import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
    }
    
    *,
    :after,
    :before {
        box-sizing: inherit;
    }

    html {
        font-size: 20px;
    }

    @media screen and (min-width: 992px) and (max-width: 1280px) {
        html {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 991px) {
        html {
            font-size: 17px;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 600px) {
        html {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 480px) {
        html {
            font-size: 15px;
        }
    }
    
    body {
        margin: 0;
    }
    
    .wrapper {
        width: 100%;
        min-height: 100vh;
        min-height: 100svh;
        height: 100%;
        display: grid;
        grid-template: min-content 1fr / 1fr;
    }
`;

export default GlobalStyle;
