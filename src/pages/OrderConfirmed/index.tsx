import * as S from './styles';
import OrderConfirmedImage from '../../assets/order-confirmed.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useLocation } from 'react-router-dom';
import { FormSchemaType } from '../Checkout';

export const OrderConfirmed = () => {
  const location = useLocation();
  const orderInfo = location.state.data as FormSchemaType;

  const paymentMethods = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
    cash: "Dinheiro",
  };

  const orderPaymentMethod = paymentMethods[location.state.paymentMethod as keyof typeof paymentMethods];

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
                <p>Entrega em
                  <strong> {orderInfo.address}, {orderInfo.addressNumber}</strong>
                </p>
                <p>{orderInfo.city} - {orderInfo.state}, {orderInfo.stateUf}</p>
              </span>
            </S.InfoAddress>

            <S.InfoTime>
              <Timer size={32} weight='fill' />
              <span>
                <p>Previsão de entrega</p>
                <strong>20min - 30min</strong>
              </span>
            </S.InfoTime>

            <S.InfoPayment>
              <CurrencyDollar size={32} weight='fill' />
              <span>
                <p>Pagamento na entrega</p>
                <strong>{orderPaymentMethod}</strong>
              </span>
            </S.InfoPayment>
          </div>
        </S.OrderInfo>
      </S.OrderInfoSection>

      <img src={OrderConfirmedImage} alt="" />
    </S.Container>
  );
}