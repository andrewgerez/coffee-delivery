import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  width: 23rem;
  height: 5rem;
`;

export const CardItem = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.gray300};
  }

  div {
    color: ${({ theme }) => theme.gray300};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    section {
      font-family: "Roboto", sans-serif;
      padding: 6.5px 0.5rem;
    }
  }
`;

export const DeleteButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  padding: 6.5px 8px;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.purple300};
  }
`;
