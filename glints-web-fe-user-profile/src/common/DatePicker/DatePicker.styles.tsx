import styled from 'styled-components';

import { Colors } from '../../styles/Colors';
import { buttonStyle } from '../../styles/Common.styles';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToggleContainer = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const ArrowButton = styled.div`
  background: ${Colors.purewhite};
`;

export const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 4px 0;
  padding: 0 12px;
  font-size: 14px;
  color: ${Colors.grey2};
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const IconBackground = styled.div`
  position: absolute;
  height: 40px;
  width: 48px;
  background: ${Colors.primary1};
  box-shadow: 0px 3px 6px #00000029;
  right: 0;
  top: 0;

  ${buttonStyle}
`;
