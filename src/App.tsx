import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { CartProvider } from "./contexts/CartContext"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Header />
        <Home />
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
