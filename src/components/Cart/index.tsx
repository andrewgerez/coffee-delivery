import { useContext } from 'react';
import { CartItem } from './CartItem';
import * as S from './styles';
import { CartContext } from '../../contexts/CartContext';
import { adder } from '../../utils/adder';
import { priceFormatter } from '../../utils/formatter';

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const individualSumOfEachItem = cart.map((item) => 
    Number(adder(item.coffee.price, item.quantity)));

  const totalSum = individualSumOfEachItem.reduce((acc, item) => acc + item, 0);

  return (
    <S.Container>
      <h4>Cafés selecionados</h4>
      
      <S.CartList>
        {cart
          .map((item, index) => (
            <CartItem
              key={index}
              coffee={item.coffee}
              quantity={item.quantity}
            />
        ))}
        <S.TotalValueContainer>
          <span>
            <p>Total de itens</p>
            <p>{priceFormatter.format(totalSum)}</p>
          </span>

          <span>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </span>

          <span>
            <strong>Total</strong>
            <strong>{priceFormatter.format(totalSum + 3.5)}</strong>
          </span>

          <S.SubmitButton type="submit">CONFIRMAR PEDIDO</S.SubmitButton>
        </S.TotalValueContainer>
      </S.CartList>
    </S.Container>
  );
}