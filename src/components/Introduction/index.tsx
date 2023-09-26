import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import CoffeeDelivery from '../../assets/coffee-delivery.svg';
import * as S from './styles';

export const Introduction = () => {
  return (
    <S.Introduction>
      <S.PresentationSection>
        <S.TitleSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
        </S.TitleSection>

        <S.ItemsSection>
          <S.Item>
            <S.ItemIcon variant='darkyellow'>
              <ShoppingCart size={16} weight="fill" />
            </S.ItemIcon>
            Compra simples e segura
          </S.Item>


          <S.Item>
            <S.ItemIcon variant='gray'>
              <Package size={16} weight="fill" />
            </S.ItemIcon>
            Embalagem mantém o café intacto
          </S.Item>

          <S.Item>
            <S.ItemIcon variant='yellow'>
              <Timer size={16} weight="fill" />
            </S.ItemIcon>
            Entrega rápida e rastreada
          </S.Item>

          <S.Item>
            <S.ItemIcon variant='purple'>
              <Coffee size={16} weight="fill" />
            </S.ItemIcon>
            O café chega fresquinho até você
          </S.Item>
        </S.ItemsSection>
      </S.PresentationSection>

      <img src={CoffeeDelivery} alt="" />
    </S.Introduction>
  );
}