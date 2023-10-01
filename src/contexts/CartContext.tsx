import { ReactNode, createContext, useState } from 'react';
import { Coffee } from '../interfaces';
import { saveCartInStorage } from '../utils/storage';

interface CartReturnData {
  cart: Coffee[];
  updateCart: (item: Coffee) => void
}

interface ICartProvider {
  children: ReactNode;
}

export const CartContext = createContext({} as CartReturnData)

export const CartProvider = ({ children }: ICartProvider) => {
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
  const [cart, setCart] = useState<Coffee[]>(storedCart);

  const updateCart = (item: Coffee) => {
    setCart((state) => [...state, item]);
    saveCartInStorage([...cart, item]);
  }

  const returnData: CartReturnData = {
    cart,
    updateCart
  };

  return (
    <CartContext.Provider value={returnData}>
      {children}
    </CartContext.Provider>
  )
}