import { CartItem } from './CartItem';
import * as S from './styles';

export const Cart = () => {
  return (
    <S.Container>
      <h4>Cafés selecionados</h4>
      <S.CartList>
        <CartItem />
        <CartItem />
      </S.CartList>
    </S.Container>
  );
}