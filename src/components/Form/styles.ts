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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  gap: 2rem;

  padding: 2.5rem;
`;

export const Header = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 0.5rem;

  section {
    span {
      font-size: 1rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.gray400};
    }

    p {
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.gray300};
    }
  }
`;

interface IBadgeIcon {
  variant: "primary" | "secondary";
}

export const BadgeIcon = styled.span<IBadgeIcon>`
  display: flex;
  align-items: center;
  width: 22px;
  height: 28px;
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.yellow500 : theme.purple300};
`;

export const FormInputs = styled.section`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem 0.75rem;
`;

export const Payment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2.5rem;
  gap: 2rem;
`;

export const PaymentOptions = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

interface IPaymentMethodButton {
  selected: boolean;
  error: boolean;
}

export const PaymentMethodButton = styled.button<IPaymentMethodButton>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  font-family: "Roboto", sans-serif;
  font-weight: 400;

  padding: 1rem;
  gap: 0.75rem;
  border-radius: 0.375rem;

  border: 1px solid ${({ theme, selected, error }) => selected 
    ? theme.purple300
    : error
      ? 'red' 
      : theme.whiteBackground};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.gray300};
  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme.purple300};
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray100};
    cursor: pointer;
  }
`;

export const ParagraphError = styled.p`
  position: absolute;

  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  color: red;
  line-height: 1.1;
`;
