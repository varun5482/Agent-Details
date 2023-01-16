import { atom } from "jotai";
import { agentDetails, searchTerm } from "../atoms/agents";
import AgentData from "../types/agent";

const getAgentList = atom(
  (get) => {
    let agentList = get(agentDetails);
    const searchValue = get(searchTerm);

    agentList = agentList.filter((agent: AgentData) => {
      if (
        (` ${agent.code}`).includes(searchValue.toLocaleLowerCase())
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
        code: agent.codeNo,
        name: agent.agentName,
        dob: agent.dob,
        club: agent.club || "",
        benefit: agent.benefit || "",
        doa: agent.doa,
        agency_ending: agent.aEnding,
        email_id: agent.emailId,
        phone: agent.cellNo,
      };
    });
    set(agentDetails, agentData);
  }
);

export { getAgentList };
