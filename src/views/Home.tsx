import { useEffect, useState } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import Filter from "../components/Filter";
import NewsList from "../components/NewsList";
import TotalResults from "../components/TotalResults";
import { News } from "../types/news";
import ScrollButton from "../components/ScrollButton";

const Home = () => {
  const [news, setNews] = useState<News[] | null>(null);
  const [numeric, setNumeric] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("new first");

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    console.log(sort);
    const fetchAllNews = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=9&_start=${numeric}&title_contains=${filter}&_sort=${
          sort === "old first" ? "publishedAt" : ""
        }`
      );
      const news = (await res.json()) as News[];
      if (news) {
        setNews((prevNews) => [...(prevNews || []), ...news]);
        console.log(news);
        if (news.length < 9) {
          setLoading(false);
          return;
        }
        setNumeric((prevNumeric) => prevNumeric + 10);
      }
      setLoading(false);
      setFetching(false);
    };
    if (fetching) {
      fetchAllNews();
    }
  }, [numeric, fetching, filter, sort]);

  const scrollHandler = (): void => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const onFilterChange = (filter: string) => {
    setNews([]);
    setFetching(true);
    setNumeric(0);
    setFilter(filter.trim());
  };

  const onSortChange = (sort: string) => {
    setNews([]);
    setFetching(true);
    setNumeric(0);
    setSort(sort.trim());
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 3,
        mb: 3,
      }}
    >
      <Filter onChange={onFilterChange} />
      <TotalResults onSortChange={onSortChange} filter={filter} />

      {news && <NewsList filter={filter} news={news} />}
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
