import { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { useFormContext } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName?: string | undefined;
  optionalLabel?: boolean;
  customGrid?: string;
  error: string | undefined;
}

export const FormInput = ({
  inputName = undefined,
  optionalLabel = false,
  customGrid = '',
  error,
  ...rest
}: IInputProps) => {
  const { register } = useFormContext();  

  return (
    <S.InputContainer grid={customGrid} error={error ? "true" : "false"}>
      {inputName ? (
        <input
          type='text'
          {...register(inputName)} 
          placeholder={error ? '' : rest.placeholder}
        />
      ) : (
        <input {...rest} />
      )}
      {optionalLabel && (
        <i>Opcional</i>
      )}

      {error && (
        <S.ErrorMessage>{error}</S.ErrorMessage>
      )}
    </S.InputContainer>
  );
}
