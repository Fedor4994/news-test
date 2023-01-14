import { RootState } from "../../store";

export const selectFilter = (state: RootState): string => state.filter;
