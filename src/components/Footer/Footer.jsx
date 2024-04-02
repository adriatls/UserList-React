import React from "react";
import linkedin from "../../assets/linkedin.png"
import gitHub from "../../assets/github.png"
import email from "../../assets/email.png"
import { FooterContainer, Img } from "./Styled";


const Footer = () => {
    return (<FooterContainer>
        <a
          href="https://www.linkedin.com/in/adria-tavares/"
          title="Conecte"
          target="_blank"
        >
          <Img src={linkedin} alt="Linkedin logo" />
        </a>
        <a
          href="https://github.com/adriatls"
          title="Veja meu portfolio"
          target="_blank"
        >
          <Img src={gitHub} alt="GitHub logo" />
        </a>
        <a
          href="mailto:adria.tavares28@gmail.com.br?subject=Assunto"
          title="Email"
          target="_blank"
        >
          <Img src={email} alt="Email logo" />
        </a>
    </FooterContainer>);
}

export default Footer;