import React from "react";
import PropTypes from "prop-types";
import { Button, HeaderContainer, Img } from "./Styled";
import { isNotEmptyObj } from "../../utils/isNotEmptyObj";
import sair from "../../assets/sair.png";

const Header = ({loggedWith, setLoggedWith}) => {

  const handleLogout = () => {
    setLoggedWith({})
  }
  return (
    <HeaderContainer>
      <h1>Desafio Técnico</h1>
      {loggedWith && isNotEmptyObj(loggedWith) && <Button onClick={handleLogout}>
        <Img src={sair} alt="Símbolo de logout" />
        <span>Sair</span>
      </Button>}
    </HeaderContainer>
  );
};

Header.propTypes = {
  loggedWith: PropTypes.object.isRequired,
  setLoggedWith: PropTypes.func.isRequired
};

export default Header;
