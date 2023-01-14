import { createSlice } from "@reduxjs/toolkit";
import { News } from "../../types/news";
import { fetchAllNews } from "./news-operations";

export interface NewsSlice {
  status: "idle" | "loading" | "finished" | "error";
  list: News[];
}

const initialState: NewsSlice = {
  status: "idle",
  list: [],
};

const newsSlice = createSlice({
  name: "@news",
  initialState,
  reducers: {
    clearNews() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.status = "finished";

        console.log(action.payload);
        state.list = [...state.list, ...action.payload];
      })
      .addCase(fetchAllNews.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default newsSlice.reducer;
export const { clearNews } = newsSlice.actions;
