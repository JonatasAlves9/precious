import styled from "styled-components";
import {tokens} from "@fluentui/react-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${tokens.colorBrandBackgroundInverted};
  width: 100%;
  height: 100%;
`;