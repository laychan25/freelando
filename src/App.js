import { Col, Container, Row } from "react-grid-system";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import Card from "./components/Card/Card";
import Estilos from "./components/EstilosGlobais/Estilos";
import ProvedorTema from "./components/ProvedorTema/ProvedorTema";
import { Rodape } from "./components/Rodape/Rodape";
import { Tipografia } from "./components/Tipografia/Tipografia";
import { Botao } from "./components/Botao/Botao";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>Login</Cabecalho>
      <Container style={{ margin: "80px 80px" }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card >
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Estado" />
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto titulo="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a senha" />
                </Col>
              </Row>
              <Row justify="between">
                <Col lg={4} md={4} sm={4}>
                  <div style={{ textAlign: "right" }}>
                    <Botao>
                      <Tipografia variante="bold16" componente="body">
                        Anterior
                      </Tipografia>
                    </Botao>
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
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape>
        <Tipografia variante="subtitulo2" componente="body">
          Desenvolvido por Lay em aula na Alura. Projeto ficticio.
        </Tipografia>
      </Rodape>
    </ProvedorTema>
  );
}

export default App;
