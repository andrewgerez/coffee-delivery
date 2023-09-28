import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 9.8125rem 0;
  gap: 3.375rem;

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.gray400};
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem 2.5rem;
`;
