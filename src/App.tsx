import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { CartProvider } from "./contexts/CartContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Checkout } from "./pages/Checkout"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
