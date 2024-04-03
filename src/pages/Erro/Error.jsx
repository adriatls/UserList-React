import React from "react";
import erro from "../../assets/error.png";
import { ErrorContainer, Img } from "./Styled";
import { useNavigate } from "react-router-dom";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
const Erro = () => {
  const goTo = useNavigate();
  const handleRedirect = () => {
    goTo("/");
  };
  return (
    <ErrorContainer>
      <Img src={erro} alt="Imagem com erro 404" />
      <h1>Página não encontrada</h1>
      <SimpleButton type="button" handleClick={handleRedirect} label="Voltar para página principal"/>
    </ErrorContainer>
  );
};

export default Erro;
