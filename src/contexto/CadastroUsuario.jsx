import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsuarioInicial = {
  perfil: '',
  interesse: '',
  nomeCompleto: '',
  uf: '',
  cidade: '',
  email: '',
  senha: '',
  senhaConfirmada: '',
};

export const CadastroUsuarioContext = createContext({
  usuario: UsuarioInicial,
  setPerfil: () => null,
  setInteresse: () => null,
  setNomeCompleto: () => null,
  setUf: () => null,
  setCidade: () => null,
  setEmail: () => null,
  setSenha: () => null,
  setSenhaConfirmada: () => null,
  submeterUsuario: ()=> null,
  possoSelecionarInteresse: ()=> null,
   erros: { erroValidacaoSenha: '' },
  setErros: () => null,
  
});

export const useCadastroUsuarioContext =  () =>{
    return useContext(CadastroUsuarioContext)
}

export const CadastroUsuarioProvider = ({ children }) => {

   const navegar = useNavigate()

  const [usuario, setUsuario] = useState(UsuarioInicial);

  const [erros , setErros] = useState({
    erroValidacaoSenha: '',
    erroSenhaCurta : ''
  })

  const setPerfil = (perfil)=>{
    setUsuario(estadoAnterior=>{
        return {
            ...estadoAnterior,
            perfil
        }
    })
  }

  const setInteresses = (interesse) => {
    setUsuario(estadoAnterior => {
      return {
        ...estadoAnterior,
        interesse,
      };
    });
  };

  const setNomeCompleto = (nomeCompleto) => {
    setUsuario(estadoAnterior => {
      return {
        ...estadoAnterior,
        nomeCompleto,
      };
    });
  };

  const setUf = (uf) => {
    setUsuario(estadoAnterior => {
      return {
        ...estadoAnterior,
        uf,
      };
    });
  };
  const setCidade = (cidade) => {
    setUsuario(estadoAnterior => {
      return {
        ...estadoAnterior,
        cidade,
      };
    });
  };

  const setEmail = (email) => {
    setUsuario(estadoAnterior => {
      return {
        ...estadoAnterior,
        email,
      };
    });
  };

  const setSenha = (senha) => {
    setUsuario(estadoAnterior=> {
      return {
        ...estadoAnterior,
        senha,
      };
    });
  };

  const setSenhaConfirmada = (senhaConfirmada) => {
    setUsuario(estadoAnterior => {
      return {
        ...estadoAnterior,
        senhaConfirmada,
      };
    });
  };

  const submeterUsuario =()=>{
    if(usuario.senhaConfirmada === usuario.senha && usuario.senha.length >= 8){
       setErros(prev => ({ ...prev, erroValidacaoSenha: '' }))
       navegar('/cadastro/concluido')
    }else{
      setErros(prev =>({...prev, erroValidacaoSenha: 'Senha nao conhecidem'}))
    }

    if(usuario.senha.length < 8){
      setErros(prev=>({...prev, erroSenhaCurta:'A senha deve ter pelo menos 8 caracteres'}))
    }
  }

  useEffect(()=>{
    if(erros.erroValidacaoSenha){
       console.log(erros.erroValidacaoSenha)
    }
  },[erros.erroValidacaoSenha])

  const possoSelecionarInteresse=()=>{
       return !!usuario.perfil
  }

  const contexto = {
    usuario,
    setPerfil,
    setInteresses,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
    possoSelecionarInteresse,
    setErros,
    erros


  };

  return (
    <CadastroUsuarioContext.Provider value={contexto}>
      {children}
    </CadastroUsuarioContext.Provider>
  );
};
