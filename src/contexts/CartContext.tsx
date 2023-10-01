import { ReactNode, createContext, useState } from 'react';
import { Coffee } from '../interfaces';
import { saveCartInStorage } from '../utils/storage';

interface CartReturnData {
  cartItems: Coffee[];
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

  const cartItems = cart?.reduce((acc, currentItem) => {
    const existingItem = acc.find(item => item.id === currentItem.id);

    if (existingItem) {
      existingItem.quantity += currentItem.quantity;
    } else {
      acc.push({ ...currentItem });
    }

    return acc;
  }, [] as Coffee[]);

  const returnData: CartReturnData = {
    cartItems,
    updateCart
  };

  return (
    <CartContext.Provider value={returnData}>
      {children}
    </CartContext.Provider>
  )
}