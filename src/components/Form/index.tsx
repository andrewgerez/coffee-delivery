import { FormSchemaType, PaymentMethod } from '../../pages/Checkout';
import { FormInput } from '../Inputs/FormInput';
import * as S from './styles';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { useFormContext } from "react-hook-form";
import { v4 as uuid } from 'uuid';

const gridAreaInputs = {
  cep: { name: "CEP", gridArea: '1 / 1 / auto / 1' },
  address: { name: "Endereço", gridArea: '2 / 1 / auto / 4' },
  addressNumber: { name: "Número do seu endereço", gridArea: '3 / 1 / auto / 1' },
  complement: { name: "Complemento", gridArea: '3 / 2 / auto / 4' },
  city: { name: "Cidade", gridArea: '4 / 1 / auto / 1' },
  state: { name: "Estado", gridArea: '4 / 2 / auto / 2' },
  stateUf: { name: "UF", gridArea: '4 / 3 / auto / 3' }
}

interface IForm {
  paymentMethod: PaymentMethod | undefined;
  handleSelectPaymentMethod: (method: PaymentMethod) => void;
}

export const Form = ({ handleSelectPaymentMethod, paymentMethod } :IForm) => {
  const { 
    register, 
    formState: { errors } 
  } = useFormContext<FormSchemaType>();

  const hasErrors = (inputField: string) => {
    return Object.entries(errors)
      .find((error) => error[0] === inputField)?.[1].message
  }

  return (
    <S.FormContainer>
      <h4>Complete seu pedido</h4>

      <S.Form>
        <S.Header>
          <S.BadgeIcon variant='primary'>
            <MapPinLine size={22} />
          </S.BadgeIcon>
          <section>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </section>
        </S.Header>

        <S.FormInputs>
          {Object.entries(gridAreaInputs).map(([key, input]) => {
            return (
              <FormInput
                key={uuid()}
                inputName={key}
                placeholder={input.name}
                customGrid={input.gridArea}
                optionalLabel={key === "complement"}
                error={hasErrors(key)}
              />
            )
          })}
        </S.FormInputs>

        <S.Payment>
          <S.Header>
            <S.BadgeIcon variant='secondary'>
              <CurrencyDollar size={22} />
            </S.BadgeIcon>
            <section>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </section>
          </S.Header>

          <S.PaymentOptions>
            <S.PaymentMethodButton 
              type="button" 
              value={"credit"}
              onClick={() => handleSelectPaymentMethod("credit")}
              selected={paymentMethod === "credit"}
              {...register("payment", { required: true })}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </S.PaymentMethodButton>

            <S.PaymentMethodButton 
              type="button" 
              value={"debit"}
              onClick={() => handleSelectPaymentMethod("debit")}
              selected={paymentMethod === "debit"}
              {...register("payment", { required: true })}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </S.PaymentMethodButton>

            <S.PaymentMethodButton 
              type="button" 
              value={"cash"}
              onClick={() => handleSelectPaymentMethod("cash")}
              selected={paymentMethod === "cash"}
              {...register("payment", { required: true })}
            >
              <Money size={16} />
              DINHEIRO
            </S.PaymentMethodButton>
          </S.PaymentOptions>
        </S.Payment>
      </S.Form>
    </S.FormContainer>
  );
}