import { Global } from "@emotion/react";

const estilos = (tema) => {
  return {
    html: {
      fontFamily: tema.fontFamily,
      overflowX: "hidden",
    },
    body: {
      margin: 0,
     
      
      
    },
   
  };
};

const Estilos = () => {
  return <Global styles={estilos} />;
};

export default Estilos;
