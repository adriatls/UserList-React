import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/formatDate";
import UserModal from "../../components/UserModal/UserModal";
import { Button, ButtonsContainer, List, UserInfo, UserListContainer } from "./Styled";
import SimpleButton from "../../components/SimpleButton/SimpleButton";

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
    <UserListContainer>
      <Button onClick={() => setIsCreateModalOpen(true)}>
        Criar novo usuário
      </Button>
      <UserModal
        userList={userList}
        setUserList={setUserList}
        modalIsOpen={isCreateModalOpen}
        setModalIsOpen={setIsCreateModalOpen}
        action="create"
      />
      <List>
        {userList.map((item) => {
          return (
            <UserInfo key={item.id}>
              <h3>{item.user} </h3>
              <p>Usuário criado em: {formatDate(item.createdAt)} </p>
              <ButtonsContainer>
                <SimpleButton
                  label="Editar"
                  type='button'
                  handleClick={() => handleUpdateModal(item)}
                />
                <SimpleButton
                  label="Excluir"
                  type='button'
                  isDisabled={loggedWith.id === item.id}
                  handleClick={() => handleDeleteUser(item.id)}
                />
              </ButtonsContainer>
            </UserInfo>
          );
        })}
      </List>
      <UserModal
        userList={userList}
        setUserList={setUserList}
        modalIsOpen={isUpdateModalOpen}
        setModalIsOpen={setIsUpdateModalOpen}
        action="update"
        user={userToEdit}
      />
    </UserListContainer>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  setUserList: PropTypes.func.isRequired,
  loggedWith: PropTypes.object.isRequired,
};

export default UserList;
