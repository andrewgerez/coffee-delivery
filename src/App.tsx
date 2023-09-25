import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
