import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../utils/formatDate";
import UserModal from "../components/UserModal";

const UserList = ({ userList, setUserList, loggedWith }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
  const [userToEdit, setUserToEdit] = React.useState(new Object());

  const handleDeleteUser = (id) => {
    const filteredUsers = userList.filter((item) => item.id !== id);
    setUserList(filteredUsers);
  };

  const handleUpdateModal = (user) => {
    setUserToEdit(user);
    setIsUpdateModalOpen(true);
  };

  return (
    <div>
      <button onClick={() => setIsCreateModalOpen(true)}>
        Criar novo usuário
      </button>
      <UserModal
        userList={userList}
        setUserList={setUserList}
        modalIsOpen={isCreateModalOpen}
        setModalIsOpen={setIsCreateModalOpen}
        action="create"
      />
      <br />
      <br />
      {userList.map((item) => {
        return (
          <div key={item.id}>
            <span>Nome: {item.user} </span>
            <span>Senha: {item.password} </span>
            <span>Usuário criado em: {formatDate(item.createdAt)} </span>
            <button
              onClick={() => handleUpdateModal(item)}
            >
              Editar
            </button>
            <button
              onClick={() => handleDeleteUser(item.id)}
              disabled={loggedWith.id === item.id}
            >
              Excluir
            </button>
          </div>
        );
      })}
      <UserModal
        userList={userList}
        setUserList={setUserList}
        modalIsOpen={isUpdateModalOpen}
        setModalIsOpen={setIsUpdateModalOpen}
        action="update"
        user={userToEdit}
      />
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  setUserList: PropTypes.func.isRequired,
  loggedWith: PropTypes.object.isRequired,
};

export default UserList;
