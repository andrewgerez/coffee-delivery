import { useForm, FormProvider } from 'react-hook-form';
import { Cart } from '../../components/Cart';
import { Form } from '../../components/Form';
import * as S from './styles';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchemaData = z.object({
  cep: z.string().min(8, { message: "O CEP precisa ter 8 dígitos."}).max(8, { message: "O CEP precisa ter 8 dígitos."}),
  address: z.string().min(5, { message: "O endereço precisa ter no mínimo 5 caracteres." }),
  numberAddress: z.string().min(1, { message: "O número do endereço precisa ter no mínimo 1 digito." }),
  complement: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  stateUf: z.string().min(2, { message: "O estado precisa ter no mínimo 2 caracteres." }),
});

type FormSchemaType = z.infer<typeof FormSchemaData>;

export const Checkout = () => {
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchemaData),
  });

  const handleFormSubmit = (data: FormSchemaType) => {
    console.log(data);
  }

  console.log(methods.formState.errors)

  return (
    <S.CheckoutContainer>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)} style={{ display: 'flex', gap: '2rem'}}>
          <Form />
          <Cart />
        </form>
      </FormProvider>
    </S.CheckoutContainer>
  );
}