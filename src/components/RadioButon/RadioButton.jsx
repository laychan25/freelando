import styled from "@emotion/styled/macro";


const RadioButon = ({ selecao,  onChange }) => {
 
  const options = [
    { value: "Ti e Progamação", label: "Ti e Progamação" },
    { value: "Design e Multimídia", label: "Design e Multimídia" },
    { value: "Revisão", label: "Revisão" },
    { value: "Tradução", label: "Tradução" },
    { value: "Transcrição", label: "Transcrição" },
    { value: "Marketing", label: "Marketing" },
  ];

  const DivPersonalizada = styled.div`
    display: block;
    padding: 16;
  `;
  const LabelInput = styled.label`
    display: flex;
    gap: 10px;
    cursor: pointer;
    padding: 10px;
  `;
  const HiddenRadio = styled.input`
    opacity: 0;
    position: absolute;
    left: -9999px;
  `;

  const SpanBolinha = styled.span`
    display: inline-block;
    align-self: center;
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid;
    border-color: black;
    border-radius: 50%;
    margin-right: 8px;
    background-color: ${({ isChecked }) => (isChecked ? "red" : "transparent")};
    border-color: ${({ isChecked }) => (isChecked ? "red" : "black")};
    &:hover {
      border-color: red;
    }
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
    }
  `;


  return (
    <>
      {options.map((opcao) => {
        const isChecked = selecao === opcao.value;
       
      
        return (
          <DivPersonalizada key={opcao.value}>
            <LabelInput>
              <HiddenRadio
                type="radio"
                name="grupo"
                onClick={()=> onChange(opcao.value)}
               
              />
              <SpanBolinha isChecked={isChecked} selecao={selecao} />
              <span>{opcao.label}</span>
            </LabelInput>
          </DivPersonalizada>
        );
      })}
    </>
  );
};

export default RadioButon;
