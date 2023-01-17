import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getAgentList } from "../../lib/selectors/agentList";
import { Box } from "grommet";
import AgentData from "../../lib/types/agent";
import { BirthdayContainer } from "./StyledBirthdayCard";
import { getCurrentYears } from "../../commons/utils";

const BirthdayCard = () => {
  const [agentDetails] = useAtom(getAgentList);
  const [birthdayToday, udpateBirthdays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const birthdays = agentDetails.filter((agent: AgentData) => {
      if (!agent?.dob) {
        return false;
      }
      const dob = new Date(agent?.dob);
      if (
        dob.getDate() === today.getDate() &&
        dob.getMonth() === today.getMonth()
      ) {
        return true;
      }
      return false;
    });
    udpateBirthdays(birthdays);
  }, []);

  return (
    <BirthdayContainer>
      {birthdayToday.length ? (
        birthdayToday.map((agent: AgentData) => {
          return (
            <Box direction="row" gap="5px" align="center">
              <Box>{agent.name}</Box>
              <Box>{getCurrentYears(agent.dob)} yrs</Box>
            </Box>
          );
        })
      ) : (
        <Box>No Birthdays Today</Box>
      )}
    </BirthdayContainer>
  );
};

export default BirthdayCard;
