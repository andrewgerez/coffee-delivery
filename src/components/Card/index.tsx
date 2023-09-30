import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { Coffee } from '../../interfaces';
import * as S from './styles';
import { priceFormatter } from '../../utils/formatter';
import { useState } from 'react';

interface ICard {
  coffee: Coffee;
}

export const Card = ({ coffee }: ICard) => {
  const [quantityItems, setQuantityItems] = useState(1);

  const handleIncrement = (increment: boolean) => {
    if (!increment && quantityItems > 1) {
      setQuantityItems((state => state - 1));
    }

    setQuantityItems((state) => state + 1);
  };

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
          <S.Quantity>
            <button onClick={() => handleIncrement(false)}><Minus size={14} /></button>
            <p>{quantityItems}</p>
            <button onClick={() => handleIncrement(true)}><Plus size={14} /></button>
          </S.Quantity>
          <S.CartIcon>
            <ShoppingCart size={22} weight="fill" />
          </S.CartIcon>
        </S.CartCheckout>
      </S.CartSection>
    </S.CoffeeCard>
  );
}
