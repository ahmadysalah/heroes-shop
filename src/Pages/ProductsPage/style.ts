import styled from "styled-components";

export const FlexProduct = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
`;

export const CardOneProduct = styled.div`
  width: 33.33%;
  padding: 1rem;
`;

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  margin-bottom: 2rem;
`;
