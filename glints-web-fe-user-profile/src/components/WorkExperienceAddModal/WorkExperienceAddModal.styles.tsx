import styled from 'styled-components';
import { FontWeights } from '../../styles/FontWeights';

export const WorkExperienceAddModalContainer = styled.div`
  display: flex;
  padding: 30px 10px;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const WorkExperienceAddModalInfo = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
  width: 100%;
  font-size: 14px;
  flex-direction: column;
`;

export const Header = styled.div`
  font-size: 16px;
  font-weight: ${FontWeights.bold};
  line-height: 43px;
  color: rgb(55, 22, 80);
`;

export const InputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
