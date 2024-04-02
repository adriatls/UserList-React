import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  button {
    padding: 5px 8px;
    background-color: #ffffff;
    border: 1.5px solid #c80012;
    border-radius: 4px;
    color: #c80012;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 14px;
    align-self: center;
    margin-top: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #2d2d2d;
  }

  input {
    border: thin solid #2d2d2d;
    padding: 0px 8px;
    border-radius: 4px;
    background-color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    height: 40px;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: #c80012;
`;
