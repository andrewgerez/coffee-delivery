import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.purple500};
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  gap: 0.25rem;
`;

export const Cart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.yellow100};
  color: ${({ theme }) => theme.yellow500};
  padding: 0.5rem;
`;