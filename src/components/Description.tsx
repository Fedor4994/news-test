import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { visibleArticle } from "../views/Details";

export interface DescriptionProps {
  article: visibleArticle;
}

const Description = ({ article }: DescriptionProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        width: "80%",
        position: "absolute",
        top: "150px",
        left: "50%",
        backgroundColor: "#fff",
        transform: "translate(-50%)",
      }}
    >
      <Typography textAlign="center" mb={4} variant="h6">
        {article.title}
      </Typography>
      <Typography>{article.summary}</Typography>
      <a
        style={{
          color: "#37345f",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: "25px",
        }}
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Learn detailed information on the ${article.newsSite} website`}
        <RocketLaunchIcon />
      </a>
      <Typography gutterBottom fontSize={14} fontWeight={700} component="span">
        <Link
          to={`/`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginTop: "15px",
          }}
        >
          <ArrowBackIcon fontSize="inherit" />
          Back to homepage
        </Link>
      </Typography>
    </Paper>
  );
};

export default Description;
