import { ShoppingCart } from 'phosphor-react';
import { Coffee } from '../../interfaces';
import * as S from './styles';
import { priceFormatter } from '../../utils/formatter';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CounterInput } from '../Inputs/CounterInput';

interface ICard {
  coffee: Coffee;
}

export const Card = ({ coffee }: ICard) => {
  const {
    addNewItemToCart,
  } = useContext(CartContext);
  const [quantityItems, setQuantityItems] = useState(1);

  const handleDecrement = () => {
    if (quantityItems > 1) {
      setQuantityItems((state) => state - 1);
    }
  }

  const handleIncrement = () => {
    setQuantityItems((state) => state + 1);
  };

  const handleSendToCart = (item: Coffee) => {
    addNewItemToCart(item, quantityItems);
  }
  
  return (
    <S.CoffeeCard>
      <img src={coffee.highlight} alt="" />

      <S.Tags>
        {coffee.type.map((type) => (
          <S.CoffeeType key={type}>{type.toUpperCase()}</S.CoffeeType>
        ))}
      </S.Tags>

      <S.CoffeeName>{coffee.name}</S.CoffeeName>

      <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>

      <S.CartSection>
        <p>R$ <strong>{priceFormatter.format(coffee.price)}</strong></p>

        <S.CartCheckout>
          <CounterInput 
            quantityItems={quantityItems}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <S.CartIcon>
            <ShoppingCart 
              size={22} 
              weight="fill" 
              onClick={() => handleSendToCart(coffee)} 
            />
          </S.CartIcon>
        </S.CartCheckout>
      </S.CartSection>
    </S.CoffeeCard>
  );
}
