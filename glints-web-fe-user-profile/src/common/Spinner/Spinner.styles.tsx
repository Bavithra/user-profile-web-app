import styled from 'styled-components';

import { Colors } from '../../styles/Colors';

export const PositioningContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-15px, -15px);
`;

export const FullSpaceContainer = styled.div`
  position: absolute;
  height: calc(100vh}px);
  width: 100%;
  left: 0;
  background-color: ${Colors.grey1};
  z-index: 1;
`;
