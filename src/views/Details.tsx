import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import DetailsHeader from "../components/DetailsHeader";

export interface visibleArticle {
  title: string;
  imageUrl: string;
  summary: string;
  newsSite: string;
  url: string;
}

const Details = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<visibleArticle | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );
      const article = (await res.json()) as visibleArticle;
      if (article) {
        setArticle(article);
        console.log(article);
      }
    };
    fetchArticle();
  }, [id]);
  return (
    <>
      {article && (
        <div style={{ position: "relative" }}>
          <DetailsHeader article={article} />
          <Description article={article} />
        </div>
      )}
    </>
  );
};

export default Details;
