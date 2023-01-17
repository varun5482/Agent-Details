import { Box, Button } from "grommet";
import styled from "styled-components";

export const Overlay = styled(Box)`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
`;

export const StyledDetailedCard = styled(Box)`
  position: fixed;
  top: 20vh;
  left: 5vw;
  z-index: 10;
  width: 90vw;
  height: auto;
  padding: ${({ theme }) => theme.global.sizes.large};
  border-radius: 10px;
  background: white;
`;

export const StyledButton = styled(Button)`
  padding: 5px 10px;
  border: 1px solid red;
  background: red;
  color: white;
  border-radius: 5px;
`;
