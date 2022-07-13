import styled from "styled-components";

import { mediaMax } from "../../styles/MediaQuery.styles";

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;

  ${mediaMax("md")} {
    flex-direction: column;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  grid-template-columns: 1fr 1fr;
`;

export const HeaderContainer = styled.div`
  display: flex;

  ${mediaMax("md")} {
    display: initial;
  }
`;

export const SearchContainer = styled.div`
  height: 56px;
  width: 462px;

  ${mediaMax("md")} {
    height: 36px;
    width: 200px;
    flex-grow: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const MeetingButtonContainer = styled.div`
  margin-top: 12px;
  ${mediaMax("md")} {
    > div {
      width: 168px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  ${mediaMax("md")} {
    margin: 0 0 10px 0;
    flex-direction: column-reverse;
  }
`;

export const PaginationContainer = styled.div`
  position: relative;

  ${mediaMax("lg")} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ItemsPerPageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  ${mediaMax("lg")} {
    position: relative;
    align-self: flex-end;
  }
`;

export const LinkButton = styled.button`
display: flex;
-webkit-box-align: center;
align-items: center;
font-size: 14px;
font-weight: bold;
letter-spacing: 0.9px;
color: rgb(1, 126, 183);
text-transform: uppercase;
padding: 10px 20px;
transition: all 0.1s ease-in-out 0s;
`;