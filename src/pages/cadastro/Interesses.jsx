import RadioButon from "../../components/RadioButon/RadioButton";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Row } from "react-grid-system";
import { Col } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link, useNavigate } from "react-router-dom";
import GrupoTexto from "../../components/GrupoTexto/GrupoTexto";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";
import { useEffect } from "react";

const Interesses = () => {
 const {usuario, setInteresses, possoSelecionarInteresse}= useCadastroUsuarioContext()

 const navegar = useNavigate()

 useEffect(()=>{
      if(!possoSelecionarInteresse()){
        navegar('/cadastro')
      }
 },[navegar,possoSelecionarInteresse])
  

  return (
    <div style={{ textAlign: "center" }}>
      <GrupoTexto children='Crie seu cadastro' subtitulo='Qual sua área de interesse?'></GrupoTexto>
      <div>
        <RadioButon 
         selecao={usuario.interesse}
         onChange={setInteresses}
         
          />
   
      </div>
      <Row justify="between">
        <Col lg={4} md={4} sm={4}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro">
              <Botao>
                <Tipografia variante="bold16" componente="body">
                  Anterior
                </Tipografia>
              </Botao>
            </Link>
          </div>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais">
              <Botao variante="secundaria">
                <Tipografia variante="bold16" componente="body">
                  Proximo
                </Tipografia>
              </Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Interesses;
