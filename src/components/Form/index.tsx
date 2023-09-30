import { FormInput } from '../Inputs/FormInput';
import * as S from './styles';
import { MapPinLine } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';

const gridAreaInputs = {
  cep: { name: "CEP", gridArea: '1 / 1 / auto / 1'},
  address: { name: "Endereço", gridArea: '2 / 1 / auto / 4'},
  addressNumber: { name: "Número do seu endereço", gridArea: '3 / 1 / auto / 1'},
  complement: { name: "Complemento", gridArea: '3 / 2 / auto / 4'},
  city: { name: "Cidade", gridArea: '4 / 1 / auto / 1'},
  state: { name: "Estado", gridArea: '4 / 2 / auto / 2'},
  stateUf: { name: "UF", gridArea: '4 / 3 / auto / 3'}
}

export const Form = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <S.FormContainer>
        <h4>Complete seu pedido</h4>

        <S.Form>
          <S.AddressInformation>
            <MapPinLine size={22} />
            <span>
              Endereço de Endivega
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </S.AddressInformation>

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
        </S.Form>
      </S.FormContainer>
    </FormProvider>
  );
}