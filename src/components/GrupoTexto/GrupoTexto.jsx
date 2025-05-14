import { Tipografia } from "../Tipografia/Tipografia";

const GrupoTexto = ({ children, subtitulo }) => {
  return (
    <>
      <div style={{ whiteSpace: "nowrap", textAlign: "center" }}>
        <Tipografia variante="h1" componente="h1">
          {children}
        </Tipografia>
      </div>
      {subtitulo &&(
      <div style={{ textAlign: "center" }}>
        <Tipografia variante="body" componente="body">
          {subtitulo}
        </Tipografia>
      </div>
      )}
    </>
  );
};

export default GrupoTexto;
