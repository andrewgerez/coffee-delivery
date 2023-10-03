import { FormInput } from '../Inputs/FormInput';
import * as S from './styles';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';

const gridAreaInputs = {
  cep: { name: "CEP", gridArea: '1 / 1 / auto / 1' },
  address: { name: "Endereço", gridArea: '2 / 1 / auto / 4' },
  addressNumber: { name: "Número do seu endereço", gridArea: '3 / 1 / auto / 1' },
  complement: { name: "Complemento", gridArea: '3 / 2 / auto / 4' },
  city: { name: "Cidade", gridArea: '4 / 1 / auto / 1' },
  state: { name: "Estado", gridArea: '4 / 2 / auto / 2' },
  stateUf: { name: "UF", gridArea: '4 / 3 / auto / 3' }
}

export const Form = () => {

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
          {Object.entries(gridAreaInputs).map(([key, input]) => (
            <FormInput
              key={key}
              inputName={key}
              placeholder={input.name}
              gridArea={input.gridArea}
              optionalLabel={key === "complement"}
            />
          ))}
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
            <button type="button">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>

            <button type="button">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>

            <button type="button">
              <Money size={16} />
              DINHEIRO
            </button>
          </S.PaymentOptions>
        </S.Payment>
      </S.Form>
    </S.FormContainer>
  );
}