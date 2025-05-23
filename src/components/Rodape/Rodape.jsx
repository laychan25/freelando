import styled from "@emotion/styled/macro";
import logo from "../../image/Ícone botões/Logo-02 1.png";
import wpp from "../../image/Ícones redes sociais/Whatsapp.svg";
import twitch from "../../image/Ícones redes sociais/Twitch.svg";
import insta from "../../image/Ícones redes sociais/Instagram.svg";
import twitter from "../../image/Ícones redes sociais/Twiter.svg";

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  z-index: 11;
  background-color: ${(props) => props.theme.cores.primarias.a};
  color: ${(props) => props.theme.cores.branco};
  width: 100vw;
  height: 75px;
  bottom: 0%;
  position: fixed;
  padding-left: 80px;
  padding-bottom: 10px;
`;
const Imagem = styled.img`
 padding-top: 5px;
  width: 130px;
`;
const Icone = styled.img`
 &:hover{
    cursor: pointer;
  }
`

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
       <a href="/"> <Icone src={wpp} alt="icone WhatsApp" /></a>
       <a href="/"><Icone src={twitch} alt="icone Twitch" /></a>
       <a href="/" ><Icone src={insta} alt="icone Instagram" /> </a>
       <a href="/"> <Icone src={twitter} alt="icone Twitter"/> </a>
      </Div>
    </RodapeEstilizado>
  );
};
