import * as S from './styles';
import { Introduction } from '../../components/Introduction';
import { Coffee } from '../../interfaces';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';

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
      {coffees?.map((coffee) => (
        <div key={coffee.id}>
          <img src={coffee.highlight} alt="" />
        </div>
      ))}
    </S.HomeContainer>
  )
}