import styled from "styled-components";
import {Text, tokens} from "@fluentui/react-components";
import {Filter24Regular} from '@fluentui/react-icons'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: solid .5px ${tokens.colorNeutralBackground1Pressed};
`;

export const Title = styled(Text)`
  font-weight: ${tokens.fontWeightBold};
  font-size: ${tokens.fontSizeBase400};
`;

export const Icon = styled(Filter24Regular)``;