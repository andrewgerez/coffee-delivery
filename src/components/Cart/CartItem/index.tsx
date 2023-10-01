import * as S from './styles';
import { Coffee } from '../../../interfaces';
import { CounterInput } from '../../Inputs/CounterInput';
import { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { Trash } from 'phosphor-react';

interface ICartITem {
  coffee: Coffee;
}

export const CartItem = ({ coffee }: ICartITem) => {
  const { updateCart } = useContext(CartContext);
  const [quantityItems, setQuantityItems] = useState(coffee.quantity);

  const handleDecrement = () => {
    if (coffee.quantity > 1) {
      setQuantityItems((state) => state - 1);
      updateCart({ ...coffee, quantity: quantityItems });
    }
  }

  const handleIncrement = () => {
    setQuantityItems((state) => state + 1);
    updateCart({ ...coffee, quantity: quantityItems });
  };

  return (
    <S.CartItemContainer>
      <S.CardItem>
        <img src={coffee?.highlight} alt="" />

        <S.CardActions>
          <span>{coffee.name}</span>
          <div>
            <section>
              <CounterInput
                quantityItems={coffee.quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            </section>

            <section>
              <S.DeleteButton>
                <Trash size={16} />
                REMOVER
              </S.DeleteButton>
            </section>
          </div>
        </S.CardActions>
      </S.CardItem>
    </S.CartItemContainer>
  );
}