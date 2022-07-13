import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Globe = styled.div`
  position: absolute;
  top: 7px;
  left: calc(6px);
  width: 20px;
  height: 20px;
  background-color: rgb(11, 174, 236);
  border-radius: 100%;
`;

export const Line = styled.div`
  position: absolute;
  left: calc(14px);
  width: 3px;
  height: 100%;
  background-color: rgb(11, 174, 236);
  margin-top: 7px;
`;

export const WorkExperienceContainer = styled.div`
  display: flex;
  padding-left: 40px;
  align-items: center;
`;

export const WorkExperienceDetail = styled.div`
  padding: 24px 0px;
  padding-right: 74px;
  margin-left: 12px;
  overflow-wrap: anywhere;
`;

export const WorkExperiencePeriod = styled.div`
  color: #616161;
`;

export const ActionIcon = styled(FontAwesomeIcon)`
  margin: 5px;
`;

export const ActionIconContainer = styled.div`
  position: absolute;
  right: 0;
`;
