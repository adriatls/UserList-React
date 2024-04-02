import React from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import UserForm from "./UseForm/UserForm";
import { isNotEmptyObj } from "../utils/isNotEmptyObj";

const UserModal = ({
  userList,
  setUserList,
  modalIsOpen,
  setModalIsOpen,
  action,
  user
}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [invalidUser, setInvalidUser] = React.useState(false);
  const [completedAction, setCompletedAction] = React.useState(false);
  const [invalidActionMessage, setInvalidActionMessage] = React.useState("");

  React.useEffect(() => {
    if (user && isNotEmptyObj(user)) {
      setUsername(user.user);
      setPassword(user.password);
    }
  }, [user]);

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  };

  const setError = (errorMessage) => {
    setInvalidActionMessage(errorMessage);
    setInvalidUser(true);
    setCompletedAction(false);
  }

  const setSuccess = (newList) => {
    setUserList(newList);
    setCompletedAction(true);
    setInvalidUser(false);
  }

  const isUsernameAvailable = (userList, username) => {
    const matchedUser = userList.filter((item) => item.user === username);
    return matchedUser.length == 0;
  };

  const handleCreateNewUser = (event) => {
    event.preventDefault();

    if (isUsernameAvailable(userList, username)) {
      setSuccess([
        ...userList,
        {
          id: uuidv4(),
          user: username,
          password,
          createdAt: Date.now(),
        },
      ]);
      clearInputs();
    } else {
      setError("Já existe usuário com esse nome!");
    }
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const updatedUser = {
      ...user,
      user: username,
      password,
    };

    const userPosition = userList.findIndex((item) => item.id === updatedUser.id);

    if (userPosition === -1) {
      setError("Ocorreu um erro ao salvar as modificações!");
    } else {
      const filteredList = userList.filter((item) => item.id !== updatedUser.id)

      if (isUsernameAvailable(filteredList, updatedUser.user)) {
        let updatedList = [...userList];
        updatedList[userPosition] = updatedUser;
        setSuccess(updatedList)
      } else {
        setError("Já existe usuário com esse nome!");
      }
    }
  };

  const actionOption = {
    create: {
      handleSubmit: handleCreateNewUser,
      buttonLabel: "Criar",
      title: "Preencha as informações do novo usuário",
      successMessage: "Novo usuário criado com sucesso!",
    },
    update: {
      handleSubmit: handleUpdateUser,
      buttonLabel: "Salvar",
      title: "Edite as informações do usuário",
      successMessage: "Usuário editado com sucesso!",
    },
  };

  const handleModalClose = () => {
    setInvalidUser(false);
    setCompletedAction(false);
    setModalIsOpen(false);
    clearInputs();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      contentLabel="Modal de exemplo"
      appElement={document.getElementById("root") || undefined}
    >
      <p>{actionOption[action].title}</p>
      <button type="button" onClick={handleModalClose}>
        Fechar
      </button>
      {invalidUser && <p>{invalidActionMessage}</p>}
      {completedAction && <p>{actionOption[action].successMessage}</p>}

      <UserForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={actionOption[action].handleSubmit}
        buttonLabel={actionOption[action].buttonLabel}
      />
    </Modal>
  );
};

UserModal.propTypes = {
  userList: PropTypes.array.isRequired,
  setUserList: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  user: PropTypes.object,
};

export default UserModal;
