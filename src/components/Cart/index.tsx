import { useContext } from 'react';
import { CartItem } from './CartItem';
import * as S from './styles';
import { CartContext } from '../../contexts/CartContext';
import { Coffee } from '../../interfaces';

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const cartItems = cart?.reduce((acc, currentItem) => {
    const existingItem = acc.find(item => item.id === currentItem.id);

    if (existingItem) {
      existingItem.quantity += currentItem.quantity;
    } else {
      acc.push({ ...currentItem });
    }

    return acc;
  }, [] as Coffee[]);

  return (
    <S.Container>
      <h4>Cafés selecionados</h4>
      <S.CartList>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            coffee={item}
          />
        ))}

      </S.CartList>
    </S.Container>
  );
}