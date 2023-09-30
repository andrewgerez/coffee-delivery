import * as S from './styles';
import Logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <S.HeaderContainer>
      <img src={Logo} alt="" />

      <S.Actions>
        <S.Location>
          <MapPin size={22} />
          Curitiba, PR
        </S.Location>

        <S.Cart>
          {cart?.length && (
            <S.Counter>{cart.length}</S.Counter>
          )}
          <ShoppingCart size={22} weight="fill" />
        </S.Cart>
      </S.Actions>
    </S.HeaderContainer>
  )
}