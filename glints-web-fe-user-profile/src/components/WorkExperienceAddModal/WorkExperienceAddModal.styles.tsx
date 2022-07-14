import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { FontWeights } from "../../styles/FontWeights";

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

export const PresentCompany = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const WorkExperienceAddModalFooter = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  justify-content: center;
  font-size: 14px;
`;

export const Company = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

export const CompanyLogoTitle = styled.div`
  color: #257942;
  font-size: 12px;
  text-align: center;
`;

export const TextArea = styled.textarea`
  border-radius: 0;
  display: flex;
  font-size: 100%;
  height: 80px;
  margin: 16px;
  font-family: Noto Sans, sans-serif;
  border: 0;
  border: 1px solid ${Colors.grey4};
  color: #000;
`;
