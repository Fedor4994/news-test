import { DescriptionProps } from "./Description";

const DetailsHeader = ({ article }: DescriptionProps) => {
  return (
    <div
      style={{
        height: "300px",
        backgroundImage: `url(${article.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default DetailsHeader;
