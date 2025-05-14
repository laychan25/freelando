import { Col, Container, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import { Rodape } from "../components/Rodape/Rodape";
import { Tipografia } from "../components/Tipografia/Tipografia";
import {Link} from '../components/Link/Link'

const LayoutBase = () => {
  return (
    <>
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col></Col>
            <Col style={{ textAlign: "right" }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Container>
      <Outlet />
      </Container>
      <Rodape>
        <Tipografia variante="subtitulo2" componente="body">
          Desenvolvido por Lay em aula na Alura. Projeto ficticio.
        </Tipografia>
      </Rodape>
    </>
  );
};

export default LayoutBase;
