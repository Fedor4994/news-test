import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Filter from "../components/Filter/Filter";
import NewsList from "../components/NewsList/NewsList";
import TotalResults from "../components/TotalResults/TotalResults";
import { GlobalNews, News } from "../types/news";
import ScrollButton from "../components/ScrollButton";

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
      console.log("fetching");
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
    <>
      <Filter />
      <TotalResults />

      {news && <NewsList news={news} />}
      {isLoading && (
        <Box sx={{ display: "flex", pt: 1 }}>
          <CircularProgress sx={{ marginLeft: "auto", marginRight: "auto" }} />
        </Box>
      )}
      <ScrollButton />
    </>
  );
};

export default Home;
