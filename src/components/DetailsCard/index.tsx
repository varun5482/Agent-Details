import React from "react";
import { Box, Text } from "grommet";
import { FormNextLink } from "grommet-icons";
import {
  AgentCard,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardBody,
  StyledButton,
} from "./StyledDetailsCard";
import AgentData from "../../lib/types/agent";
import { useAtom } from "jotai";
import { selectedAgent } from "../../lib/atoms/agents";

interface Props {
  detail: AgentData;
}

const DetailsCard: React.FC<Props> = ({ detail }) => {
  const { code, name, email_id, phone } = detail;

  const [_, udpdateSelectedAgent] = useAtom(selectedAgent);

  const handleViewDetails = (): void => {
    udpdateSelectedAgent(detail);
  };

  return (
    <AgentCard>
      <StyledCardHeader>
        <Box direction="row">
          <Text weight="bold">Agency Code:</Text>
          <Box>{code}</Box>
        </Box>
      </StyledCardHeader>
      <StyledCardBody>
        <Box direction="row">
          <Text weight="bold">Name:</Text>
          <Box>{name}</Box>
        </Box>
        <Box direction="row">
          <Text weight="bold">Mobile Number:</Text>
          <Box>{phone}</Box>
        </Box>
        <Box direction="row">
          <Text weight="bold">Email Id:</Text>
          <Box>{email_id}</Box>
        </Box>
      </StyledCardBody>
      <StyledCardFooter align="center">
        <StyledButton onClick={handleViewDetails}>
          View Details <FormNextLink size="20px" color="#FFF" />
        </StyledButton>
      </StyledCardFooter>
    </AgentCard>
  );
};

export default DetailsCard;
