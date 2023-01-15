import { Box, TextInput } from "grommet";
import styled from "styled-components";

export const StyledFilterBox = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    background: brown;
    width: 100vw;
    z-index: 2;
`;

export const StyledSearch = styled(TextInput)`
  background: white;
  border-radius: 5px;
`;
