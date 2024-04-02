import styled from "styled-components";

export const Content = styled.div`
  p {
    color: #c80012;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ErrorMessage = styled.span`
  color: #a6303b;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SucessMessage = styled.span`
  color: #12c800;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const CloseButton = styled.button`
  border: none;
  text-align: center;
  background-color: #fff;
  align-self: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  filter: invert(18%) sepia(82%) saturate(3900%) hue-rotate(343deg)
    brightness(73%) contrast(124%);
`;

