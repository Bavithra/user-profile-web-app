import styled from "styled-components";
import { FontSizes } from "../../styles/FontSizes";
import { mediaMax } from "../../styles/MediaQuery.styles";

export const WorkDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding 16px;
`;

export const Title = styled.h2`
    padding: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaMax("md")} {
      font-size: ${FontSizes.size7};
    }
`;

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.9px;
  color: rgb(1, 126, 183);
  text-transform: uppercase;
  padding: 10px 20px;
  transition: all 0.1s ease-in-out 0s;


  ${mediaMax("md")} {
    font-size: 12px;
  }
`;

export const NoDataContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 24px;
  color: rgb(119, 119, 119);
`;
