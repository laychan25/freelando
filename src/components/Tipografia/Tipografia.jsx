import styled from "@emotion/styled/macro";

const componentes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodyBold: "strong",
  body2: "p",
  body2Bold: "strong",
  legenda: "p",
};

const estilos = {
  h1: `
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    `,
  h2: `
     font-weight: 600;
     font-size: 32px;
  `,
  h3: `
     font-weight: 600;
     font-size: 24px;
  `,

  body: `
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
     
    `,
  regular20: `
     font-weight: 400;
     font-size: 20px;

  `,
  regular16: `
  font-weight: 400;
  font-size: 16px;

`,
  bold16: `
     font-weight: 700;
     font-size: 16px;
  `,
  subtitulo1: `
     font-weight: 400;
     font-size: 16px;
  `,
  subtitulo2: `
     font-weight: 400;
     font-size: 14px;
  `,
  sublinhado: `
    font-weight: 400;
     font-size: 14px;
     text-decoration: underline solid
  `,
};

export const Tipografia = ({ variante, componente, children }) => {
  const tag = componentes[componente];
  const ComponenteUtilizado = styled[tag]`
    ${estilos[variante]}
  `;
  return <ComponenteUtilizado>{children}</ComponenteUtilizado>;
};
