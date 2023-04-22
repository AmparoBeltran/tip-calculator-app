import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./components/styles/Global"
import MainContainer from './MainContainer'


const theme = {
  colors: {

    //Primary

    strongCyan: 'hsl(172, 67%, 45%)',

    //Neutral

    veryDarkCyan: 'hsl(183, 100%, 15%)',
    darkGrayishCyan: 'hsl(186, 14%, 43%)',
    grayishCyan: 'hsl(184, 14%, 56%)',
    lightGrayishCyan: 'hsl(185, 41%, 84%)',
    veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
    white: 'hsl(0, 0%, 100%)',
  },

  desktop: '1440px'
}



function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
