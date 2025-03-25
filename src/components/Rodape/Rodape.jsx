import styled from "@emotion/styled/macro";
import logo from "../../image/Ícone botões/Logo-02 1.png";
import wpp from "../../image/Ícones redes sociais/Whatsapp.svg";
import twitch from "../../image/Ícones redes sociais/Twitch.svg";
import insta from "../../image/Ícones redes sociais/Instagram.svg";
import twitter from "../../image/Ícones redes sociais/Twiter.svg";

const RodapeEstilizado = styled.footer`
display: flex;
justify-content: space-between;
  background-color: ${(props) => props.theme.cores.primarias.a};
  color: ${(props) => props.theme.cores.branco};
  width: 100%;
  height: 90px;
  bottom: 0%;
  position: fixed;
  padding-left: 80px;
  
`;
const Imagem = styled.img`
padding-top: 5px;
  width: 170px;
`;
const Icone = styled.img``;

const Div = styled.div`
  display: block;
  width: 400px;
  
`;

export const Rodape = ({ children }) => {
  return (
    <RodapeEstilizado>
      <Div>
        <Imagem src={logo} />
        {children}
      </Div>

      <Div>
        <p>Acesse nossas redes:</p>
        <Icone src={wpp} />
        <Icone src={twitch} />
        <Icone src={insta} />
        <Icone src={twitter} />
      </Div>

    </RodapeEstilizado>
  );
};
