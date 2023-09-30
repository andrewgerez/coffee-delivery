import { CardItem } from './CartItem/styles';
import * as S from './styles';

export const Cart = () => {
  return (
    <S.Container>
      <h4>Cafés selecionados</h4>
      <S.CartList>
        <CardItem />
      </S.CartList>
    </S.Container>
  );
}