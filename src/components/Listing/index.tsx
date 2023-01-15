import React from "react";
import { Box } from "grommet";
import { useAtom } from "jotai";
import { getAgentList } from "../../lib/selectors/agentList";
import DetailsCard from "../DetailsCard";
import AgentDetailCard from "../AgentDetailCard";

interface Props {}

const Listing: React.FC<Props> = () => {
  const [agentDetails] = useAtom(getAgentList);

  return (
    <React.Fragment>
      <Box margin="70px 0">
        {agentDetails
          ? agentDetails.map((agent) => {
              return <DetailsCard detail={agent} />;
            })
          : null}
      </Box>
      <AgentDetailCard />
    </React.Fragment>
  );
};

export default Listing;
