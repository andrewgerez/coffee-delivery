import * as S from './styles';
import { Coffee } from '../../../interfaces';
import { CounterInput } from '../../Inputs/CounterInput';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { Trash } from 'phosphor-react';
import { adder } from '../../../utils/adder';
import { priceFormatter } from '../../../utils/formatter';

interface ICartITem {
  coffee: Coffee;
  quantity: number;
}

export const CartItem = ({ coffee, quantity }: ICartITem) => {
  const { updateProductQuantity, deleteCartItem } = useContext(CartContext);

  const handleDelete = () => {
    deleteCartItem(coffee);
  }

  const handleDecrement = () => {
    updateProductQuantity(coffee.id, quantity - 1);
  }

  const handleIncrement = () => {
    updateProductQuantity(coffee.id, quantity + 1);
  }

  const addedValue = Number(adder(coffee.price, quantity));
  
  return (
    <S.CartItemContainer>
      <S.CardItem>
        <img src={coffee?.highlight} alt="" />

        <S.CardActions>
          <span>{coffee.name}</span>
          <div>
            <section>
              <CounterInput
                quantityItems={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            </section>

            <section>
              <S.DeleteButton onClick={handleDelete}>
                <Trash size={16} />
                REMOVER
              </S.DeleteButton>
            </section>
          </div>
        </S.CardActions>
        <p>{priceFormatter.format(addedValue)}</p>
      </S.CardItem>
    </S.CartItemContainer>
  );
}