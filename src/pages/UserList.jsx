import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../utils/formatDate";
import { v4 as uuidv4 } from "uuid";

const UserList = ({ userList, setUserList, loggedWith }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [invalidNewUser, setInvalidNewUser] = React.useState(false);

  const isUsernameAvailable = (username) => {
    const matchedUser = userList.filter((item) => item.user === username);
    return matchedUser.length == 0;
  };

  const handleCreateNewUser = (event) => {
    event.preventDefault();

    if (isUsernameAvailable(username)) {
      setUserList([
        ...userList,
        {
          id: uuidv4(),
          user: username,
          password,
          createdAt: Date.now(),
        },
      ]);
      setInvalidNewUser(false);
      setUsername("");
      setPassword("");
    } else {
      setInvalidNewUser(true);
    }
  };

  const handleDelete = (id) => {
    const filteredUsers = userList.filter((item) => item.id !== id);
    setUserList(filteredUsers);
  };

  return (
    <div>
      <form onSubmit={handleCreateNewUser}>
        {invalidNewUser && <p>Já existe usuário com esse nome!</p>}
        <label htmlFor="user">Usuário</label>
        <input
          type="text"
          id="user"
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

        <button type="submit">Criar</button>
      </form>
      <br />
      <br />
      {userList.map((item) => {
        return (
          <div key={item.id}>
            <span>Nome: {item.user} </span>
            <span>Senha: {item.password} </span>
            <span>Usuário criado em: {formatDate(item.createdAt)} </span>
            <button>Editar</button>
            <button onClick={() => handleDelete(item.id)} disabled={loggedWith.id === item.id}>Excluir</button>
          </div>
        );
      })}
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.array,
  setUserList: PropTypes.func,
  loggedWith: PropTypes.object,
};

export default UserList;
