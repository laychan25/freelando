import styled from "@emotion/styled";
import setaVoltar from '../../image/Ícone botões/íconevoltar.svg';
import setaProximo from '../../image/Ícone botões/íconepróximo.svg'

const BotaoAnterior = styled.button`
display: flex;
align-items: center;
gap: 5px;
padding: 20px;
color: ${props=> props.theme.cores.primarias.b};
background-color: ${props=> props.theme.cores.secundarias.a};
width: 127px;
height: 40px;
border-radius: ${(props) => props.theme.espacamentos.s};
border: 2px solid;
border-color: ${props=> props.theme.cores.primarias.b};
&:hover{
 color: ${props=> props.theme.cores.secundarias.b};
 border-color: ${props=> props.theme.cores.secundarias.b} ;
}
`;

const BotaoProximo = styled.button`
display: flex;
align-items: center;
text-align: center;
gap: 5px;
padding: 20px;
color: ${props=> props.theme.cores.branco};
background-color: ${props=> props.theme.cores.primarias.b};
width: 127px;
height: 40px;
border-radius: ${(props) => props.theme.espacamentos.s};
border: 2px solid;
border-color: ${props=> props.theme.cores.primarias.b};

&:hover{
 background-color: ${props=> props.theme.cores.secundarias.b};
}
`;

const Imagem = styled.img`
  width: 16px;
  height: 24px;
`

export const Botao = ({ children, variante='primaria'}) => {
  if(variante=== 'primaria'){
    return <BotaoAnterior>
        <Imagem src={setaVoltar} alt="Seta para a esquedar"/>
       {children} </BotaoAnterior>
  }else{
    return <BotaoProximo>
      {children}
      <Imagem src={setaProximo} alt="Seta para a esquedar"/>
      </BotaoProximo>
  }
  
};
