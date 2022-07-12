import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: ${Colors.grey1} 2px solid;
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

export const FileInput = styled.input`
  display: none;
`;
