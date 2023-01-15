import { Box } from "grommet";
import styled from "styled-components";

export const StyledHomeBox = styled(Box)`
  background: #8b7e74;
  color: #333;
  min-height: 100vh;
  font-size: ${({ theme }) => theme.global.sizes.large};
`;
