import { Grid } from "@mui/material";
import { News } from "../../types/news";
import NewsCard from "../NewsCard/NewsCard";
export interface NewsListProps {
  news: News[];
}

const NewsList = ({ news }: NewsListProps) => {
  console.log(news);
  return (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
      {news.map((el) => (
        <NewsCard key={el.id} info={el} />
      ))}
    </Grid>
  );
};

export default NewsList;
