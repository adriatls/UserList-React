import React from "react";
import PropTypes from "prop-types";

const UserForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  buttonLabel,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input
        type="text"
        id="username"
        value={username || ''}
        onChange={(event) => setUsername(event.target.value.trim())}
        placeholder="Nome"
        required
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        value={password || ''}
        onChange={(event) => setPassword(event.target.value.trim())}
        placeholder="*****"
        required
      />

      <button type="submit">{buttonLabel}</button>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default UserForm;
