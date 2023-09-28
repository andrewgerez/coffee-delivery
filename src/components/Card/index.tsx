import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { Coffee } from '../../interfaces';
import * as S from './styles';

interface ICard {
  coffee: Coffee;
}

export const Card = ({ coffee }: ICard) => {
  return (
    <S.CoffeeCard>
      <img src={coffee.highlight} alt="" />

      <S.Tags>
        {coffee.type.map((type) => (
          <S.CoffeeType>{type.toUpperCase()}</S.CoffeeType>
        ))}
      </S.Tags>

      <S.CoffeeName>{coffee.name}</S.CoffeeName>

      <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>

      <S.CartSection>
        <p>R$ <strong>{coffee.price}</strong></p>

        <S.CartCheckout>
          <S.Quantity>
            <button><Minus size={14} /></button>
            <p>1</p>
            <button><Plus size={14} /></button>
          </S.Quantity>
          <S.CartIcon>
            <ShoppingCart size={22} weight="fill" />
          </S.CartIcon>
        </S.CartCheckout>
      </S.CartSection>
    </S.CoffeeCard>
  );
}
