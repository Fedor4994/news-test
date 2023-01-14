import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const filterSlice = createSlice({
  name: "@filter",
  initialState,
  reducers: {
    setFilter(_, actions: PayloadAction<string>) {
      return actions.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
