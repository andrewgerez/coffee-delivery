import styled from "styled-components";

export const Introduction = styled.main`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const PresentationSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 36.75rem;
  gap: 4.125rem;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme.gray500};
  }

  h3 {
    font-size: 1.25rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.gray400};
  }
`;

export const ItemsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;
`;

export const Item = styled.section`
  display: flex;
  align-items: center;
  white-space: nowrap;

  gap: 0.75rem;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};
`;

interface IItemIcon {
  variant: "darkyellow" | "yellow" | "gray" | "purple";
}

export const ItemIcon = styled.span<IItemIcon>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6.25rem;

  color: ${({ theme }) => theme.whiteBackground};
  background-color: ${({ variant, theme }) =>
    variant === "darkyellow"
      ? theme.yellow500
      : variant === "yellow"
      ? theme.yellow300
      : variant === "gray"
      ? theme.gray300
      : theme.purple300};
`;
