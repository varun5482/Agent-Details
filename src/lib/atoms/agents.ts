import { atom } from "jotai";
import AgentData from "../types/agent";

export const agentDetails = atom([]);

export const selectedAgent = atom<AgentData | null>(null);

export const searchTerm = atom("");
