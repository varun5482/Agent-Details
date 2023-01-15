import React from "react";
import Listing from "../Listing";
import Filters from "../Filters";
import { StyledHomeBox } from "./StyledHomePage";
import AgentDetailCard from "../AgentDetailCard";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <StyledHomeBox>
      <Filters />
      <Listing />
      <AgentDetailCard />
    </StyledHomeBox>
  );
};

export default HomePage;
