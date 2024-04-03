import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserForm from "../../components/UserForm/UserForm";
import { LoginContainer } from "./Styled";

const Login = ({ userList, setLoggedWith }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [invalidLogin, setInvalidLogin] = React.useState(false);
  const goTo = useNavigate();

  const checkValidUser = () => {
    let isValidUser = false;
    let matchedUser = new Array();

    if (userList) {
      matchedUser = userList.filter((item) => {
        return item.user === username.trim();
      });

      if (matchedUser.length === 1) {
        isValidUser = matchedUser[0].password === password.trim();
      }
    }

    return {isValidUser, matchedUser};
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const {isValidUser, matchedUser} = checkValidUser()

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
    <LoginContainer>
      <p>Entre na sua conta</p>

      {invalidLogin && <span>Usuário ou senha inválidos!</span>}

      <UserForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        buttonLabel={"Entrar"}
      />
    </LoginContainer>
  );
};

Login.propTypes = {
  userList: PropTypes.array.isRequired,
  setLoggedWith: PropTypes.func.isRequired,
};

export default Login;
