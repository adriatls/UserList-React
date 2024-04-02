import styled from "styled-components";

export const UserListContainer = styled.div`
  padding: 0px 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 5px 8px;
  background-color: #c80012;
  border: 1.5px solid #c80012;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const List = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 12px;
  width: 220px;

  h3 {
    font-size: 16px;
    color: #c80012;
  }

  p {
    font-size: 14px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
