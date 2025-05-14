import styled from "@emotion/styled/macro";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import fotoConcluido from "../../image/imgensCliente/Cadastro pronto-cliente.png";
import { Link } from "react-router-dom";
import { Botao } from "../../components/Botao/Botao";
import GrupoTexto from "../../components/GrupoTexto/GrupoTexto";

const Imagem = styled.img`
  width: 420px;
`;

const Moldura = styled.div`
    display: flex;
    justify-content: center;
`

const Concluido = () => {
  return (
    <>
      <GrupoTexto children='Seu Perfil esta completo' subtitulo='Agora é só começar a se conectar com os melhores freelancers do
          mercado!'></GrupoTexto>
      <Moldura>
        <Imagem src={fotoConcluido} alt="imagem de garota sorrindo" />
      </Moldura>
      <Moldura>
      <Link to="/cadastro">
        <Botao>
          <Tipografia variante="bold16" componente="body">
            Voltar para a home
          </Tipografia>
        </Botao>
      </Link>
      </Moldura>
    </>
  );
};

export default Concluido;
