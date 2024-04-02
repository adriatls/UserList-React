import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #c80012;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  margin-bottom: 40px;

  h1 {
    color: #ffffff;
  }
`;

export const Button = styled.button`
  padding: 5px 8px;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  color: #c80012;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  filter: invert(18%) sepia(82%) saturate(3900%) hue-rotate(343deg)
    brightness(73%) contrast(124%);
`;
