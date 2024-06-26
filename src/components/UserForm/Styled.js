import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #2d2d2d;

    &:after {
      content: "*";
      color: #c80012;
    }
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
  margin-right: 8px;
`;
