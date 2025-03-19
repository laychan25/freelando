import styled from "@emotion/styled/macro"

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.cores.primarias.a};
    width: 100%;
    height: 90px ;
    color: ${props => props.theme.cores.neutras.c};

`


const Cabecalho =({children})=>{
  return(
     <Header>
       {children}
     </Header>
  )
}

export default Cabecalho