import { css } from "styled-components";
import styled from "styled-components";

export const CoffeeCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 16rem;
  height: 19.375rem;
`;

export const Tags = styled.section`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CoffeeType = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;

  background-color: ${({ theme }) => theme.yellow100};
  color: ${({ theme }) => theme.yellow500};

  margin: 0.75rem 0 1rem 0;
`;

export const CoffeeName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${({ theme }) => theme.gray400};
  margin-bottom: 0.5rem;
`;

export const CoffeeDescription = styled.p`
  max-width: 13.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  text-align: center;
  color: ${({ theme }) => theme.gray200};
`;

export const CartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  gap: 1.4375rem;
  margin: 2rem 0 1.25rem 0;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.gray300};

    strong {
      font-size: 1.5rem;
    }
  }
`;

export const CartCheckout = styled.section`
  display: flex;
  gap: 0.5rem;
`;

interface ICartIcon {
  disabled: boolean;
}

export const CartIcon = styled.span<ICartIcon>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;

  background-color: ${({ theme }) => theme.purple500};
  color: ${({ theme }) => theme.whiteCard};
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.purple300};
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    pointer-events: none;
  `}
`;
