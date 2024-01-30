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
        grid-template-areas: "head head" "filter card";
        grid-template-rows: min-content 1fr;
        grid-template-columns: minmax(200px, 20vw) 1fr;
        @media screen and (max-width: 600px) {
            grid-template-areas: "head" "card";
            grid-template-rows: min-content 1fr;
            grid-template-columns: 1fr;
        }
    }

    .menu__toggle {
        display: none;
    }

    .menu__toggle:checked + .menu__btn > span {
        transform: rotate(45deg);
    }
    .menu__toggle:checked + .menu__btn > span::before {
        top: 0;
        transform: rotate(0);
    }
    .menu__toggle:checked + .menu__btn > span::after {
        top: 0;
        transform: rotate(90deg);
    }
    #menu__toggle:checked ~ * {
        transform: translateX(0);
    }

    .menu__btn {
        display: flex;
        align-items: center;
        position: fixed;
        top: 135px;
        left: 15px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 6;
        transform: translateX(0);
    }

    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: black;
        transition-duration: .25s;
    }
    .menu__btn > span::before {
        content: '';
        top: -8px;
    }
    .menu__btn > span::after {
        content: '';
        top: 8px;
    }
`;

export default GlobalStyle;
