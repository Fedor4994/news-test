import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../types/news";

const initialState: News[] = [];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
