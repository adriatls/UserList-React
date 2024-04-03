import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    color: #c80012;
  }
`;

export const Img = styled.img`
  width: 250px;
  filter: invert(18%) sepia(82%) saturate(3900%) hue-rotate(343deg)
    brightness(73%) contrast(124%);
`;
