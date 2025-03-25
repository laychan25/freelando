import styled from "@emotion/styled/macro"
import logo from '../../image/Ícone botões/Logo-02 1.png'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.cores.primarias.a};
    width: 100%;
    height: 90px ;
    color: ${props => props.theme.cores.neutras.c};
    
    
`
const  Div = styled.div`
  margin-right: 80px;
`
const Imagem = styled.img`
padding-left: 80px;
  
`

const Cabecalho =({children})=>{
  return(
     <Header>
      <Imagem src={logo} />
      <Div>
       {children}
      </Div>
     </Header>
  )
}

export default Cabecalho