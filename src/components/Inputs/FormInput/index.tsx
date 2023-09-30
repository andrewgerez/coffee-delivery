import { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { useFormContext } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName?: string | undefined;
  optionalLabel?: boolean;
  gridArea?: string;
}

export const FormInput = ({
  inputName = undefined,
  optionalLabel = false,
  gridArea = '',
  ...rest
}: IInputProps) => {
  const { register } = useFormContext();

  return (
    <S.InputContainer gridArea={gridArea}>
      {inputName ? (
        <input {...register(inputName)} {...rest} />
      ) : (
        <input {...rest} />
      )}
      {optionalLabel && (
        <i>Opcional</i>
      )}
    </S.InputContainer>
  );
}
