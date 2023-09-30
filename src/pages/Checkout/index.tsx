import { Cart } from '../../components/Cart';
import { Form } from '../../components/Form';
import * as S from './styles';

export const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <Form />
      <Cart />
    </S.CheckoutContainer>
  );
}