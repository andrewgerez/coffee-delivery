import styled from "styled-components";

export const Counter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.gray500};
  gap: 0.25rem;

  button {
    all: unset;
    color: ${({ theme }) => theme.purple300};

    cursor: pointer;
  }
`;