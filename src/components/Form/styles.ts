import styled from "styled-components";

export const FormContainer = styled.div`
  width: 40rem;
  height: 39.3125rem;

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.gray400};
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  gap: 2rem;

  padding: 2.5rem;
`;

export const AddressInformation = styled.section`
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;

  span {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.gray400};

    p {
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.gray300};
    }
  }

  svg {
    color: ${({ theme }) => theme.yellow500};
  }
`;

export const FormInputs = styled.section`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem 0.75rem;  
`;

export const Payment = styled.section``;
