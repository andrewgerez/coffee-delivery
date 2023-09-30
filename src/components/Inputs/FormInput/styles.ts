import styled from "styled-components";

interface IInput {
  gridArea: string;
}

export const InputContainer = styled.div<IInput>`
  display: flex;
  justify-content: space-between;
  height: 2.625rem;
  grid-area: ${({gridArea}) => gridArea};

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.whiteBackground};

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
