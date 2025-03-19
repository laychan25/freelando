import styled from "@emotion/styled/macro"

const RodapeEstilizado = styled.footer`
    background-color: ${props => props.theme.cores.primarias.a};
    color: ${props => props.theme.cores.branco};
    width: 100%;
    height: 90px;
    position: absolute;
    bottom: 0%;
    
`

export const Rodape =({children})=>{
    return(
        <RodapeEstilizado>
            {children}
        </RodapeEstilizado>
    )
}