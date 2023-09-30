import * as S from './styles';
import teste from '../../../assets/coffees/american.svg'

export const CartItem = () => {
  return (
    <S.CartItemContainer>
      <S.CardItem>
        <img src={teste} alt="" />
      </S.CardItem>
    </S.CartItemContainer>
  );
}