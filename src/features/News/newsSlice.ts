import { createSlice } from "@reduxjs/toolkit";
import { News } from "../../types/news";
import { fetchAllNews } from "./news-operations";

interface NewsSlice {
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
        if (state.list.length === 0) {
          state.list = action.payload;
        } else {
          action.payload.forEach((item) => {
            if (!state.list.find((el) => el.id === item.id)) {
              state.list.push(item);
            }
          });
        }
      })
      .addCase(fetchAllNews.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default newsSlice.reducer;
export const { clearNews } = newsSlice.actions;
