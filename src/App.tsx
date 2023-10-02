import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { CartProvider } from "./contexts/CartContext"
import { Routes, Route } from "react-router-dom"
import { Checkout } from "./pages/Checkout"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          toastStyle={{ zIndex: 9999 }}
          limit={2}
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
