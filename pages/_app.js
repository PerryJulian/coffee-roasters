import { ThemeProvider } from 'styled-components'
import Theme from '../styles/theme/theme'
import 'sanitize.css/sanitize.css'
import { GlobalStyles } from '../styles/globals.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
