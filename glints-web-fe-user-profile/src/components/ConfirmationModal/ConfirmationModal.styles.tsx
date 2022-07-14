import styled from 'styled-components';
import { FontWeights } from '../../styles/FontWeights';

export const ConfirmationModalContainer = styled.div`
  display: flex;
  padding: 30px 10px;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const ConfirmationModalInfo = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
  width: 100%;
  font-size: 12px;
  flex-direction: column;
  text-align: center;
`;

export const ConfirmationModalFooter = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  flex-shrink: 0;
  justify-content: center;
  font-size: 12px;

  > *:not(:last-child) {
    margin-right: 24px;
  }
`;

export const Header = styled.div`
  font-size: 16px;
  font-weight: ${FontWeights.bold};
  line-height: 43px;
  color: rgb(55, 22, 80);
`;
