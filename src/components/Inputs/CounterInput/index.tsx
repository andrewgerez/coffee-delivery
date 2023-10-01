import { Minus, Plus } from 'phosphor-react';
import * as S from './styles';

interface ICounterInput {
  quantityItems: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const CounterInput = ({
  quantityItems,
  handleIncrement,
  handleDecrement
}: ICounterInput) => {
  return (
    <S.Counter>
      <button
        onClick={handleDecrement}
      >
        <Minus size={14} />
      </button>
      <p>{quantityItems}</p>
      <button
        onClick={handleIncrement}
      >
        <Plus size={14} />
      </button>
    </S.Counter>
  );
}