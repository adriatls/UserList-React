import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Form, InputContainer } from "./Styled";
import SimpleButton from "../SimpleButton/SimpleButton";

const UserForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  buttonLabel,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          id="username"
          value={username || ""}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Nome"
          required
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">Senha</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password || ""}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="*****"
          required
        />
      </InputContainer>

      <label>
        <Checkbox
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
          checked={showPassword}
        />
        Mostrar senha
      </label>

      <SimpleButton type="submit" label={buttonLabel}/>
    </Form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  showPassword: PropTypes.bool,
};

export default UserForm;
