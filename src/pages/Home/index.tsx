import * as S from './styles';
import { Introduction } from '../../components/Introduction';
import { Coffee } from '../../interfaces';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Card } from '../../components/Card';

export const Home = () => {
  const [coffees, setCoffees] = useState<Coffee[]>();

  useEffect(() => {
    api.get('/coffees').then(response => {
      setCoffees(response.data);
    })
  }, []);

  return (
    <S.HomeContainer>
      <Introduction />
      <S.CoffeeListContainer>
        <h3>Nossos cafés</h3>
        <S.CoffeeList>
          {coffees?.map((coffee) => (
            <Card
              key={coffee.id} 
              coffee={coffee} 
            />
          ))}
        </S.CoffeeList>
      </S.CoffeeListContainer>
    </S.HomeContainer>
  )
}