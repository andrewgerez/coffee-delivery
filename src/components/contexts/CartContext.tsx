import { ReactNode, createContext, useState } from 'react';
import { Coffee } from '../../interfaces';

interface CartReturnData {
  cart: Coffee[] | null;
  quantityItems: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
  handleSendToCart: (item: Coffee) => void;
}

interface CartContextType { }

interface ICartProvider {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<Coffee[] | null>(null);
  const [quantityItems, setQuantityItems] = useState(1);

  const handleDecrement = () => {
    if (quantityItems > 1) {
      setQuantityItems((state => state - 1));
    }
  }

  const handleIncrement = () => {
    setQuantityItems((state) => state + 1);
  };

  const handleSendToCart = (item: Coffee) => {
    setCart(Array.from({ length: quantityItems }, () => item));
  }

  const returnData: CartReturnData = {
    cart,
    quantityItems,
    handleDecrement,
    handleIncrement,
    handleSendToCart
  };

  return (
    <CartContext.Provider value={returnData}>
      {children}
    </CartContext.Provider>
  )
}