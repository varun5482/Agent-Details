
import React from "react";
import { StyledSearch, StyledFilterBox } from "./StyledFilter";
import { searchTerm } from "../../lib/atoms/agents";
import { useAtom } from "jotai";

interface Props {}

const Filters: React.FC<Props> = () => {
  const [searchValue, updateSearchValue] = useAtom(searchTerm);

  const handleChange = (event: any) => {
    const value = event?.target?.value;
    updateSearchValue(value);
  };
  return (
    <StyledFilterBox pad="10px">
      <StyledSearch
        placeholder="Search by name or agency code"
        value={searchValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </StyledFilterBox>
  );
};

export default Filters;
