import Cabecalho from "./components/Cabecalho/Cabecalho";
import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import Card from "./components/Card/Card";
import Estilos from "./components/EstilosGlobais/Estilos";
import ProvedorTema from "./components/ProvedorTema/ProvedorTema";
import { Rodape } from "./components/Rodape/Rodape";
import { Tipografia } from "./components/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema >
      <Estilos />
      <Cabecalho>
       
      </Cabecalho>
       <Card>
        <Tipografia variante='h3' componente='h1'>
        Freelando
        </Tipografia>
        <Tipografia variante='body' componente='body'>
        Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo='Nome Completo'/>
       </Card>
       <Rodape/>
    </ProvedorTema>
  );
}

export default App;
