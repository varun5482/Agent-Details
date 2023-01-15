import React, { useEffect } from "react";
import axios from "axios";
import { ThemeContext } from "grommet";
import HomePage from "./components/HomePage";
import theme from "./theme";
import { getAgentList } from "./lib/selectors/agentList";
import { useAtom } from "jotai";

function App() {
  const [_, setAgentDetails] = useAtom(getAgentList);

  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/cbf28a1d-1b75-407d-bbbe-384ef402a600")
      .then((res) => setAgentDetails(res.data));
  }, [setAgentDetails]);

  return (
    <div className="App">
      <ThemeContext.Extend value={theme}>
        <HomePage />
      </ThemeContext.Extend>
    </div>
  );
}

export default App;
