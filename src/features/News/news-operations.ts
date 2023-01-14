import { createAsyncThunk } from "@reduxjs/toolkit";
import { News } from "../../types/news";

interface fetchAllParams {
  numeric: number;
  filter: string;
  sort: string;
}

export const fetchAllNews = createAsyncThunk(
  "news/fetchNews",
  async ({ numeric, filter, sort }: fetchAllParams) => {
    const res = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=9&_start=${numeric}&title_contains=${filter}&_sort=${
        sort === "old first" ? "publishedAt" : ""
      }`
    );
    const news = (await res.json()) as News[];
    return news;
  }
);
