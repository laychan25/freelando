import { Col, Row } from 'react-grid-system'
import {Tipografia} from '../../components/Tipografia/Tipografia'
import cliente  from '../../image/imgensCliente/Imagem cliente.png'
import frelance  from '../../image/imgensCliente/Imagem freela.png'
import {Link} from '../../components/Link/Link'

import {Link as RouterLink} from 'react-router-dom'
import GrupoTexto from '../../components/GrupoTexto/GrupoTexto'
import { useCadastroUsuarioContext } from '../../contexto/CadastroUsuario'
const SelecaoCliente = ()=>{

  const {setPerfil}= useCadastroUsuarioContext()

  return(
    <div style={{textAlign: 'center'}}>
      <GrupoTexto children='Crie seu cadastro' subtitulo='Como podemos te ajudar?'></GrupoTexto>
      <Row>
        <Col md={6} sm={12}>
        <RouterLink to='interesses' onClick={()=> setPerfil('cliente')}>
        <img src={cliente} alt='' />
        <Tipografia variante='body' componente='body'>
          Sou cliente e preciso de um freela!
        </Tipografia>
        </RouterLink>
        </Col >
        <Col md={6} sm={12}>
        <img src={frelance} alt='' />
        <Tipografia variante='body' componente='body'>
          Sou freela e preciso de clientes!
        </Tipografia>
        </Col >
      </Row>
      <div style={{textAlign: 'center'}}>
        <Tipografia variante='body2' componente='body2'>
          Já tem conta? 
        </Tipografia>
        <p>
          <Link  variante="secundaria" >Já sou cliente</Link>
        </p>
      </div>
    </div>
  )
}
export default SelecaoCliente