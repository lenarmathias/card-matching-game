import { createGlobalStyle } from "styled-components";

const backgroundOne = ({ theme }) => theme.colors.backgroundOne;
const backgroundTwo = ({ theme }) => theme.colors.backgroundTwo;

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        margin: 0 auto !important;
        width: 1000px;
        max-width: 90%;
        background: linear-gradient(to bottom, 
            ${backgroundOne}, 
            ${backgroundTwo}
        );
        background-attachment: fixed;
        word-break: break-word;
    }

    button {
        cursor: pointer;
    }

    a, button {
        -webkit-tap-highlight-color: transparent;
    }

    button:disabled {
        cursor: not-allowed;
    }
`;