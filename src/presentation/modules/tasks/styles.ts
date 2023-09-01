import styled from "styled-components";
import {tokens, Text} from "@fluentui/react-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${tokens.colorNeutralForegroundInverted};
  width: 100%;
  height: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  padding: 20px;
`;

export const ViewTexts = styled.div`
`;
export const TextHeaderContent = styled(Text)`
  font-weight: ${tokens.fontWeightBold};
`;

export const DateHeaderContent = styled(Text)`
  font-size: ${tokens.fontSizeBase100};
  margin-left: 10px;
`;