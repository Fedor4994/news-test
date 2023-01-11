import Filter from "../components/Filter/Filter";
import NewsList from "../components/NewsList/NewsList";
import TotalResults from "../components/TotalResults/TotalResults";
import { DefaultNews } from "../mock";
import { News } from "../types/news";

const visibleNews: News[] = DefaultNews.map((news) => ({
  id: news.id,
  title: news.title,
  image: news.imageUrl,
  summary: news.summary,
  published: news.publishedAt,
}));

const Home = () => {
  return (
    <>
      <Filter />
      <TotalResults total={visibleNews.length} />
      <NewsList news={visibleNews} />
    </>
  );
};

export default Home;
