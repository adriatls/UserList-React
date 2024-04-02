import styled from "styled-components";

export const Content = styled.div`
p {
    color: #c80012;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const CloseButton = styled.button`
  border-radius: 20px;
  border: thin solid #c80012;
  text-align: center;
  line-height: 120%;
  color: #c80012;
  background-color: #fff;
  align-self: flex-start;

  &:hover {
    cursor: pointer;
  }
`;
