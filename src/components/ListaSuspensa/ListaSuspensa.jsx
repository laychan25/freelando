import styled from "@emotion/styled/macro";
import { useEffect, useRef, useState } from "react";
import { Tipografia } from "../Tipografia/Tipografia";

const LabelEstilizada = styled.label`
  display: block;
  font-size: 20px;
  position: absolute;
  justify-content: center;
`;
const BotaoEStilizado = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 150px;
  height: 40px;
  border: 1px solid;
  border-radius: 18px;
  border-color: ${(props) => props.theme.cores.neutras.a};
  font-family: ${(props) => props.theme.fontFamily};
  border-bottom-left-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  background: ${(props) => props.theme.cores.branco};
  align-items: center;
  gap: 30px;
  padding: 5px;
`;
const Lista = styled.ul`
  text-align: center;
  position: relative;
  width: 138px;
  height: 150px;
  z-index: 10;
  margin: 0;
  border: 1px, solid ${(props) => props.theme.cores.neutras.a};
  border-top: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: ${(props) => props.theme.cores.branco};
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: ${(props) => props.theme.fontFamily};
  padding: 5px;

  &::-webkit-scrollbar {
    background-color: transparent;
  }
`;

const Itens = styled.li`
  font-family: ${(props) => props.theme.fontFamily};
  list-style: none;
  padding-bottom: 3px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.cores.focus};
  }
  color: ${(props) => (props.focoAtivo ? props.theme.cores.focus : "inherit")};
`;

const Linha = styled.hr`
  color: #000;
  padding: 0;
  opacity: 0.5;
`;

export const ListaSuspensa = ({ titulo, opcoes }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);
  const [focado, setFocado] = useState(null);
  const [selecionado, setSelecionado] = useState(null);
  const itemFocado = useRef(null)

  useEffect(()=>{
    itemFocado.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  },[focado])

  const manipularTeclas = (evento) => {
    alternarVisibilidade(true);
    switch (evento.key) {
      case "ArrowDown":
        evento.preventDefault();
        setFocado((prev) => {
          if (prev == null) {
            return 0;
          }
          if(prev === (opcoes.lenght - 1)){
             return opcoes.lenght - 1;
          }
          return (prev += 1);
        });
        break;

      case "ArrowUp":
        evento.preventDefault();
        setFocado((prev) => {
          if (!prev) {
            return 0;
          }
          return (prev -= 1);
        });

        break;

      case "Enter":
        evento.preventDefault();
        setFocado(null);
        alternarVisibilidade(false);
        setSelecionado(opcoes[focado])
        break;
        case "Tab":
        case "Escape":
          setFocado(null);
          alternarVisibilidade(false)

          break;
      default:
        break;
    }
  };
  return (
    <LabelEstilizada>
      {titulo}

      <BotaoEStilizado
        estaAberta={estaAberta}
        onClick={() => alternarVisibilidade(!estaAberta)}
        onKeyDown={manipularTeclas}
      >
        <Tipografia variante='regular16' componente='body'>{selecionado ? selecionado.text : "Selecionado"}</Tipografia>
        <div>
          <span>{estaAberta ? "▲" : "▼"}</span>
        </div>
      </BotaoEStilizado>
      {estaAberta && (
        <Lista>
          {opcoes.map((opcao, index) => (
            <Itens
              key={opcao.value}
              ref={index === focado ? itemFocado : null}
              focoAtivo={index === focado}
              onClick={() => setSelecionado(opcao)}
            >
              {opcao.text}
              <Linha></Linha>
            </Itens>
          ))}
        </Lista>
      )}
    </LabelEstilizada>
  );
};
