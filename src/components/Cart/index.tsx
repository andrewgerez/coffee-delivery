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
        <S.TotalValueContainer>
          <span>
            <p>Total de itens</p>
            <p>R$ 30,00</p>
          </span>

          <span>
            <p>Entrega</p>
            <p>R$ 3,00</p>
          </span>

          <span>
            <strong>Total</strong>
            <strong>R$ 33,00</strong>
          </span>

          <S.SubmitButton>CONFIRMAR PEDIDO</S.SubmitButton>
        </S.TotalValueContainer>
      </S.CartList>
    </S.Container>
  );
}