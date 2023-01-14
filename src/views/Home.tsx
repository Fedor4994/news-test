import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Filter from "../components/Filter";
import NewsList from "../components/NewsList";
import TotalResults from "../components/TotalResults";
import ScrollButton from "../components/ScrollButton";
import { useAppDispatch, useAppSelector } from "../redux-hooks";
import { selectFilter } from "../features/Filter/filterSelectors";
import { fetchAllNews } from "../features/News/news-operations";
import { selectNews } from "../features/News/newsSelectors";
import { clearNews } from "../features/News/newsSlice";
import Loader from "../components/Loader";

const Home = () => {
  const [numeric, setNumeric] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [sort, setSort] = useState("new first");

  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const news = useAppSelector(selectNews);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (news.list.length % 9 === 0) {
      if (fetching) {
        console.log(news.status);
        if (news.status === "loading") {
          return;
        }
        dispatch(fetchAllNews({ filter, numeric, sort }));
        setNumeric((prevNumeric) => prevNumeric + 10);
        setFetching(false);
      }
    }
  }, [numeric, fetching, filter, sort, dispatch, news]);

  const scrollHandler = (): void => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const onFilterChange = () => {
    dispatch(clearNews());

    setFetching(true);
    setNumeric(0);
  };

  const onSortChange = (sort: string) => {
    dispatch(clearNews());

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
      <TotalResults onSortChange={onSortChange} />
      {news && <NewsList />}
      {news.status === "loading" && <Loader />}
      <ScrollButton />
    </Container>
  );
};

export default Home;
