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

export const TotalValueContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.gray300};
  }

  strong {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.gray400};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 7.375rem;
  margin-top: 0.75rem;

  border: none;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.yellow300};
  color: ${({ theme }) => theme.white};

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;

  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.yellow500};
    cursor: pointer;
  }
`;