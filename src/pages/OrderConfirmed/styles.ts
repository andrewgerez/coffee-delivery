import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.375rem;
  padding-top: 5rem;
`;

export const OrderInfoSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;

  section {
    gap: 0.025rem;

    h3 {
      font-size: 2rem;
      font-weight: 800;
      color: ${({ theme }) => theme.yellow500};
    }

    p {
      font-size: 1.25rem;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.gray400};
    }
  }
`;

export const OrderInfo = styled.div`
  width: 100%;
  max-width: 32.875rem;
  height: 16.875rem;

  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 0.375rem 2.25rem;
  padding: 1px;
  overflow: hidden;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 2.5rem;
    gap: 2rem;
    border-radius: 0.375rem 2.25rem;
    background-color: ${({ theme }) => theme.white};

    p {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      color: ${({ theme }) => theme.gray300};
    }

    strong {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      color: ${({ theme }) => theme.gray300};
    }
  }
`;

export const InfoItem = styled.span`
  display: flex;
  gap: 0.75rem;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 100%;

    color: ${({ theme }) => theme.white};
  }
`;

export const InfoAddress = styled(InfoItem)`
  svg {
    background-color: ${({ theme }) => theme.purple300};
  }
`;

export const InfoTime = styled(InfoItem)`
  svg {
    background-color: ${({ theme }) => theme.yellow300};
  }
`;

export const InfoPayment = styled(InfoItem)`
  svg {
    background-color: ${({ theme }) => theme.yellow500};
  }
`;
