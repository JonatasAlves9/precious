import styled from "styled-components";
import {tokens} from "@fluentui/react-components";

export const Wrapper = styled.div`
  flex: 0 0 auto; // A barra superior não se estica, mantém sua altura
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${tokens.shadow2};
`;

export const ViewSides = styled.div`
  width: 20%;
`;

export const ViewSideRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;


export const ViewCenter = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

