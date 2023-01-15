import { atom } from "jotai";
import { agentDetails, searchTerm } from "../atoms/agents";
import AgentData from "../types/agent";

const getAgentList = atom(
  (get) => {
    let agentList = get(agentDetails);
    const searchValue = get(searchTerm);

    agentList = agentList.filter((agent: AgentData) => {
      if (
        agent.code.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
      if (
        agent.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    });

    return agentList;
  },
  (_, set, by: any) => {
    const agentData = by.map((agent: any) => {
      return {
        code: agent["CODE NO"],
        name: agent["AGENT NAME"],
        dob: agent["D.O.B"],
        club: agent["CLUB"],
        benefit: agent["BENEFIT"],
        doa: agent["D.O.A"],
        agency_ending: agent["A ENDING"],
        email_id: agent["EMAIL ID"],
        phone: agent["CELL NO"],
      };
    });
    set(agentDetails, agentData);
  }
);

export { getAgentList };
