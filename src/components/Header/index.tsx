import * as S from './styles';
import Logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="" />

      <S.Actions>
        <S.Location>
          <MapPin size={22} />
          Curitiba, PR
        </S.Location>

        <S.Cart>
          <S.Counter>1</S.Counter>
          <ShoppingCart size={22} weight="fill" />
        </S.Cart>
      </S.Actions>
    </S.HeaderContainer>
  )
}