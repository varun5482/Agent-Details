import React from "react";
import { Box, Button, Text } from "grommet";
import { Overlay, StyledDetailedCard, StyledButton } from "./StyledAgentDetailCard";
import { useAtom } from "jotai";
import { selectedAgent } from "../../lib/atoms/agents";

const AgentDetailCard = () => {
  const [agentDetail, setSelectedAgent] = useAtom(selectedAgent);

  const handleClose = (): void => {
    setSelectedAgent(null);
  };

  const data = [
    {
      title: "Contact Details",
      data: [
        { key: "Mobile", value: agentDetail?.phone },
        { key: "Email", value: agentDetail?.email_id },
      ],
    },
    {
      title: "Agency Details",
      data: [
        { key: "Date of Agency", value: agentDetail?.doa },
        { key: "Agency Ending", value: agentDetail?.agency_ending },
      ],
    },
    {
      title: "Club Details",
      data: [
        { key: "Club", value: agentDetail?.club || "N/A" },
        { key: "Benefits", value: agentDetail?.benefit || "N/A" },
      ],
    },
  ];

  return (
    <React.Fragment>
      {agentDetail ? <Overlay onClick={handleClose} /> : null}
      {agentDetail ? (
        <StyledDetailedCard>
          <Box direction="row" gap="20px" margin="20px 0">
            <Box>Image</Box>
            <Box>
              <Text>{agentDetail?.name}</Text>
              <Box direction="row" align="center">
                <Text weight="bold">Agency Code:</Text> {agentDetail?.code}
              </Box>
              <Box direction="row" align="center">
                <Text weight="bold">DOB:</Text> {agentDetail?.dob}
              </Box>
            </Box>
          </Box>
          {data.map((agentData) => {
            return (
              <Box margin="10px 0 5px">
                <Text margin="5px 0" size="20px" weight="bold">
                  {agentData.title}
                </Text>
                <Box>
                  {agentData.data.map((dataInfo) => {
                    return (
                      <Box
                        direction="row"
                        align="center"
                        margin={{ bottom: "5px" }}
                      >
                        <Text margin={{ right: "5px" }} weight="bold">
                          {dataInfo.key}:{" "}
                        </Text>{" "}
                        {dataInfo.value}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
          <Box align="center">
            <StyledButton onClick={handleClose}>Close</StyledButton>
          </Box>
        </StyledDetailedCard>
      ) : null}
    </React.Fragment>
  );
};

export default AgentDetailCard;
