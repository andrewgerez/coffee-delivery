import { useForm, FormProvider } from 'react-hook-form';
import { Cart } from '../../components/Cart';
import { Form } from '../../components/Form';
import * as S from './styles';

export const Checkout = () => {
  const methods = useForm();

  return (
    <S.CheckoutContainer>
      <FormProvider {...methods}>
        <Form />
        <Cart />
      </FormProvider>
    </S.CheckoutContainer>
  );
}