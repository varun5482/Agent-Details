import { Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import styled from "styled-components";

export const AgentCard = styled(Card)`
  margin: ${({ theme }) => theme?.global?.sizes?.large};
  margin-top: 0px;
  border: 1px solid;
  border-radius: 10px;
  background: white;
`;

export const StyledCardHeader = styled(CardHeader)`
  border-bottom: 1px solid #333;
  padding: ${({ theme }) => theme?.global?.sizes?.xsmall};
`;

export const StyledCardBody = styled(CardBody)`
  border-bottom: 1px solid #333;
  padding: ${({ theme }) => theme?.global?.sizes?.xsmall};
`;

export const StyledCardFooter = styled(CardFooter)`
  padding: ${({ theme }) => theme?.global?.sizes?.xsmall};
`;  

export const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    border: 1px solid red;
    background: red;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
`;
