import styled from "@emotion/styled/macro";

const Span = styled.span`
 display: flex ;
 justify-self: center;
 background-color: #cccbe2;
  color: #721a1a;
  padding: 4px 8px;
  font-size: 14px;
  
 `;

const SpanErro = ({ children }) => {
  return <Span>{children}</Span>;
};

export default SpanErro;
