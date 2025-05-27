import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Row } from "react-grid-system";
import { Col } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link, useNavigate } from "react-router-dom";
import { CampoTexto } from "../../components/CampoTexto/CampoTexto";
import { ListaSuspensa } from "../../components/ListaSuspensa/ListaSuspensa";
import GrupoTexto from "../../components/GrupoTexto/GrupoTexto";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";
import { useEffect } from "react";
import SpanErro from '../../components/SpanErro/Span'

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

const DadosPessoais = () => {
  const navegar = useNavigate();

  const {
    usuario,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
    possoSelecionarInteresse,
    erros,
  } = useCadastroUsuarioContext();

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navegar("/cadastro");
    }
  }, [navegar, possoSelecionarInteresse]);

  const finalizaCadastro = (evento) => {
    evento.preventDefault();
    submeterUsuario();
  };
  return (
    <form onSubmit={finalizaCadastro}>
      <GrupoTexto
        children="Crie seu cadastro"
        subtitulo=" Crie seu perfil gratuitamente para começar a trabalha com os melhores
        freelancers. Em seguida, você poderá dar mais detalhes sobre suas
        demandas e sobre sua forma de trabalho."
      ></GrupoTexto>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <CampoTexto
            titulo="Nome Completo"
            valor={usuario.nomeCompleto}
            onChange={setNomeCompleto}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <ListaSuspensa
            titulo="Estado"
            opcoes={estadosBrasileiros}
            valor={usuario.uf}
            onChange={setUf}
          />
        </Col>
        <Col lg={8} md={8} sm={8}>
          <CampoTexto
            titulo="Cidade"
            valor={usuario.cidade}
            onChange={setCidade}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <CampoTexto
            titulo="Email"
            valor={usuario.email}
            onChange={setEmail}
            tipo="email"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <CampoTexto
            titulo="Senha"
            valor={usuario.senha}
            onChange={setSenha}
            tipo="password"
          />
           {erros.erroSenhaCurta &&(
            <SpanErro>{erros.erroSenhaCurta}</SpanErro>
           )}
        </Col>
        <Col lg={6} md={6} sm={6}>
          <CampoTexto
            titulo="Repita a senha"
            valor={usuario.senhaConfirmada}
            onChange={setSenhaConfirmada}
            tipo="password"
          ></CampoTexto>
           {erros.erroValidacaoSenha &&(
            <SpanErro>{erros.erroValidacaoSenha}</SpanErro>
           )}
        </Col>
      </Row>

      <Row justify="between">
        <Col lg={4} md={4} sm={4}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/interesses">
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
            <Botao variante="secundaria">
              <Tipografia variante="bold16" componente="body">
                Proximo
              </Tipografia>
            </Botao>
          </div>
        </Col>
      </Row>
    </form>
  );
};
export default DadosPessoais;
