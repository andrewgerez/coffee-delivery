import * as S from './styles';
import Logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <img
        src={Logo}
        alt=""
        onClick={() => navigate('/')}
      />

      <S.Actions>
        <S.Location>
          <MapPin size={22} />
          Curitiba, PR
        </S.Location>

        <S.Cart disabled={!cartItems?.length} onClick={() => navigate('/checkout')}>
          {cartItems.length > 0 && (
            <S.Counter>{cartItems.length}</S.Counter>
          )}
          <ShoppingCart
            size={22}
            weight="fill"
          />
        </S.Cart>
      </S.Actions>
    </S.HeaderContainer>
  )
}