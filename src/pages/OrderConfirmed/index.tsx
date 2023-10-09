import * as S from './styles';
import OrderConfirmedImage from '../../assets/order-confirmed.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useLocation } from 'react-router-dom';

export const OrderConfirmed = () => {
  const location = useLocation();

  console.log(location.state)

  return (
    <S.Container>
      <S.OrderInfoSection>
        <section>
          <h3>Uhu! Pedido Confirmado</h3>
          <p>Agora é só aguardar que logo o cafe chegará até você!</p>
        </section>

        <S.OrderInfo>
          <div>
            <S.InfoAddress>
              <MapPin size={32} weight='fill' />
              <span>
                <p>Entrega em { }</p>
                <p>{ }</p>
              </span>
            </S.InfoAddress>

            <S.InfoTime>
              <Timer size={32} weight='fill' />
              <span>
                <p>Previsão de entrega</p>
                <p>20min - 30min</p>
              </span>
            </S.InfoTime>

            <S.InfoPayment>
              <CurrencyDollar size={32} weight='fill' />
              <span>
                <p>Pagamento na entrega</p>
                <p>{}</p>
              </span>
            </S.InfoPayment>
          </div>
        </S.OrderInfo>
      </S.OrderInfoSection>

      <img src={OrderConfirmedImage} alt="" />
    </S.Container>
  );
}