import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.span`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.purple500};
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;

  padding: 0.5rem;
  gap: 0.25rem;
`;

export const Cart = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0;

  background-color: ${({ theme }) => theme.yellow100};
  color: ${({ theme }) => theme.yellow500};

  cursor: pointer;
`;

export const Counter = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: -0.5rem;
  left: 1.35rem;

  width: 1.25rem;
  height: 1.25rem;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 6.25rem;
  background-color: ${({ theme }) => theme.yellow500};
  color: ${({ theme }) => theme.white};
`;
