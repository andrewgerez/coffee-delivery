import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
