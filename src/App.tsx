import React, { useEffect } from "react";
import { ThemeContext } from "grommet";
import HomePage from "./components/HomePage";
import theme from "./theme";
import { getAgentList } from "./lib/selectors/agentList";
import { useAtom } from "jotai";
import AgentData from "./lib/data/agent.json";

function App() {
  const [_, setAgentDetails] = useAtom(getAgentList);

  useEffect(() => {
    setAgentDetails(AgentData);
  }, []);

  return (
    <div className="App">
      <ThemeContext.Extend value={theme}>
        <HomePage />
      </ThemeContext.Extend>
    </div>
  );
}

export default App;
