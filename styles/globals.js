import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import breakpoints from '@breakpoints'


export const GlobalStyles = createGlobalStyle`
    html {
        --color-primary: #0e8784;
        --color-secondary: #333d4b;
        --color-tertiary: #fdd6ba;
        
        --color-cream: #fefcf7;
        --color-grey: #83888f;
        --color-dark-blue: #2c343e;

        font-size: 62.5%;
    }

    html,
    body {
        background-color: var(--color-cream);
        height: 100vh;
        padding: 0;
        font-family: Barlow, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        margin: 0;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 1280px;
    padding: 20px 25px 70px;

    @media ${breakpoints.device.md} {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media ${breakpoints.device.lg} {
        padding-left: 0;
        padding-right: 0;
    }
`