import { ReactNode, createContext, useState } from 'react';
import { Coffee } from '../../interfaces';

interface CartReturnData {
  cart: Coffee[] | null;
  updateCart: (item: Coffee[]) => void
}

interface ICartProvider {
  children: ReactNode;
}

export const CartContext = createContext({} as CartReturnData)

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<Coffee[] | null>(null);

  const updateCart = (item: Coffee[]) => {
    setCart(item);
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