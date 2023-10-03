import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10rem;
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
