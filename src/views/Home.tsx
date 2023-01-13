import { useEffect, useState } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import Filter from "../components/Filter";
import NewsList from "../components/NewsList";
import TotalResults from "../components/TotalResults";
import { GlobalNews, News } from "../types/news";
import ScrollButton from "../components/ScrollButton";

// 3dc031dc81e34860a01f4e044c2cb344

const Home = () => {
  const [news, setNews] = useState<News[] | null>(null);
  const [numeric, setNumeric] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const fetchAllNews = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=9&_start=${numeric}`
      );
      const news = (await res.json()) as GlobalNews[];
      if (news) {
        const visibleNews: News[] = news.map((news) => ({
          id: news.id,
          title: news.title,
          image: news.imageUrl,
          summary: news.summary,
          published: news.publishedAt,
        }));
        setNews((prevNews) => [...(prevNews || []), ...visibleNews]);
        setNumeric((prevNumeric) => prevNumeric + 10);
      }
      setLoading(false);
      setFetching(false);
    };
    if (fetching) {
      fetchAllNews();
    }
  }, [numeric, fetching]);

  const scrollHandler = (): void => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 3,
        mb: 3,
      }}
    >
      <Filter />
      <TotalResults />

      {news && <NewsList news={news} />}
      {isLoading && (
        <Box sx={{ display: "flex", pt: 1 }}>
          <CircularProgress sx={{ marginLeft: "auto", marginRight: "auto" }} />
        </Box>
      )}
      <ScrollButton />
    </Container>
  );
};

export default Home;
