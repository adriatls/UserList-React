import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserForm from "../components/UserForm";

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
      setUsername('');
      setPassword('');
    } else {
      setInvalidLogin(true);
    }
  };

  return (
    <div>
      <p>Entre na sua conta</p>

      {invalidLogin && <p>Usuário ou senha inválidos</p>}

      <UserForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        buttonLabel={"Entrar"}
      />
    </div>
  );
};

Login.propTypes = {
  userList: PropTypes.array.isRequired,
  setLoggedWith: PropTypes.func.isRequired,
};

export default Login;
