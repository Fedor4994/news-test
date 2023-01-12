import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalNews, News } from "../types/news";

interface visibleArticle extends Pick<News, "title" | "summary" | "image"> {}

const Details = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<visibleArticle | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );
      const article = (await res.json()) as GlobalNews;
      if (article) {
        const visibleArticle: visibleArticle = {
          title: article.title,
          summary: article.summary,
          image: article.imageUrl,
        };
        setArticle(visibleArticle);
        console.log(visibleArticle);
      }
    };
    fetchArticle();
  }, [id]);
  return (
    <>
      {article && (
        <>
          <img src={article.image} alt={article.title} />
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
        </>
      )}
    </>
  );
};

export default Details;
