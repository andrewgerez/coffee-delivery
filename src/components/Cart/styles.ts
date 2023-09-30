import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 28rem;
  height: 33.5rem;

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.gray400};
  }
`;

export const CartList = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2.5rem;
  gap: 3rem;
`;
