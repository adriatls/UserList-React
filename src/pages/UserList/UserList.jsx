import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/formatDate";
import UserModal from "../../components/UserModal/UserModal";
import {
  Button,
  ButtonsContainer,
  HeaderList,
  List,
  QueryInput,
  SelectContainer,
  UserInfo,
  UserListContainer,
} from "./Styled";
import SimpleButton from "../../components/SimpleButton/SimpleButton";

const UserList = ({ userList, setUserList, loggedWith }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
  const [userToEdit, setUserToEdit] = React.useState(new Object());
  const [queryByUsername, setQueryByUsername] = React.useState("");
  const [sortByOldest, setSortByOldest] = React.useState("");
  const [rearrangedList, setRearrangedList] = React.useState(new Array());

  React.useEffect(() => {
    if (userList?.length) {
      const reorganizedList = userList
        .filter((item) => {
          return item.user.toLowerCase().includes(queryByUsername.toLocaleLowerCase());
        })
        .sort((currentUser, nextUser) => {
          if (!sortByOldest) {
            return nextUser.createdAt - currentUser.createdAt;
          }
        });
      setRearrangedList(reorganizedList);
    }
  }, [userList, queryByUsername, sortByOldest]);

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
      <HeaderList>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          Criar novo usuário
        </Button>
        <QueryInput
          type="text"
          id="queryByUsername"
          value={queryByUsername || ""}
          onChange={(event) => setQueryByUsername(event.target.value.trim())}
          placeholder="Pesquise por usuário"
        />
        <SelectContainer>
          <label htmlFor="date">Ordenar por data de criação:</label>
          <select
            id="date"
            value={sortByOldest}
            onChange={({ target }) => setSortByOldest(target.value)}
          >
            <option value={"true"}>Mais antigo</option>
            <option value={""}>Mais recente</option>
          </select>
        </SelectContainer>
      </HeaderList>
      <UserModal
        userList={userList}
        setUserList={setUserList}
        modalIsOpen={isCreateModalOpen}
        setModalIsOpen={setIsCreateModalOpen}
        action="create"
      />
      <List>
        {!rearrangedList.length ? (
          <p>Não foi encontrado usuário para essa busca!</p>
        ) : (
          rearrangedList.map((item) => {
            return (
              <UserInfo key={item.id}>
                <h3>{item.user} </h3>
                <p>Usuário criado em: {formatDate(item.createdAt)} </p>
                <ButtonsContainer>
                  <SimpleButton
                    label="Editar"
                    type="button"
                    handleClick={() => handleUpdateModal(item)}
                  />
                  {loggedWith.id !== item.id && (
                    <SimpleButton
                      label="Excluir"
                      type="button"
                      handleClick={() => handleDeleteUser(item.id)}
                    />
                  )}
                </ButtonsContainer>
              </UserInfo>
            );
          })
        )}
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
