import styled from "styled-components";

interface IInput {
  grid: string;
  error: string;
}

export const InputContainer = styled.div<IInput>`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 2.625rem;
  grid-area: ${({ grid }) => grid};

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid ${({ theme, error }) => error === 'true' ? 'red' : theme.whiteBackground};

  i {
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.gray200};
    cursor: default;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.yellow500};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  white-space: nowrap;

  color: red;
  font-family: "Roboto", sans-serif;
  font-size: 0.7rem;
  top: -1rem;
  left: 0;
`;
