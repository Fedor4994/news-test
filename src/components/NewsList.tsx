import { Grid } from "@mui/material";
import { News } from "../types/news";
import NewsCard from "./NewsCard";
export interface NewsListProps {
  news: News[];
  filter: string;
}

const NewsList = ({ news, filter }: NewsListProps) => {
  return (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
      {news.map((el) => (
        <NewsCard filter={filter} key={el.id} info={el} />
      ))}
    </Grid>
  );
};

export default NewsList;
