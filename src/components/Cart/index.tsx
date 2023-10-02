import { useContext } from 'react';
import { CartItem } from './CartItem';
import * as S from './styles';
import { CartContext } from '../../contexts/CartContext';

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <S.Container>
      <h4>Cafés selecionados</h4>
      <S.CartList>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            coffee={item.coffee}
            quantity={item.quantity}
          />
        ))}
      </S.CartList>
    </S.Container>
  );
}