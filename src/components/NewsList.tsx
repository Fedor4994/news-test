import { Grid } from "@mui/material";
import { selectNews } from "../features/News/newsSelectors";
import { useAppSelector } from "../redux-hooks";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const news = useAppSelector(selectNews);

  return (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
      {news.list.map((el) => (
        <NewsCard key={el.id} info={el} />
      ))}
    </Grid>
  );
};

export default NewsList;
