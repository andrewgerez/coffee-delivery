import { useContext } from 'react';
import { CartItem } from './CartItem';
import * as S from './styles';
import { CartContext } from '../../contexts/CartContext';

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

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