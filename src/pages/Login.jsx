import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ userList, setLoggedWith }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [invalidLogin, setInvalidLogin] = React.useState(false);
  const goTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValidUser = false;
    let matchedUser = new Array();

    if (userList) {
      matchedUser = userList.filter((item) => {
        return item.user === username;
      });

      if (matchedUser.length === 1) {
        isValidUser = matchedUser[0].password === password;
      }
    }

    if (isValidUser) {
      goTo("/");
      setLoggedWith(matchedUser[0]);
    } else {
      setInvalidLogin(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Entre na sua conta</p>

        {invalidLogin && <p>Usuário ou senha inválidos</p>}

        <label htmlFor="user">Usuário</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value.trim())}
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value.trim())}
          required
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  userList: PropTypes.array,
  setLoggedWith: PropTypes.func,
};

export default Login;
