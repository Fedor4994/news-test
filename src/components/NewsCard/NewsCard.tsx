import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { News } from "../../types/news";

interface NewsCardProps {
  info: News;
}

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const NewsCard = ({ info }: NewsCardProps) => {
  const joinedDate = localDate.format(new Date(info.published));

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <CardMedia
          component="img"
          alt={info.title}
          height="140"
          image={info.image}
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {joinedDate}
          </Typography>
          <Typography gutterBottom fontSize={16} component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" fontSize={12} color="text.secondary">
            {`${info.summary.slice(0, 100)}...`}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          <Typography gutterBottom fontSize={16} component="div">
            <Link to={`/${info.id}`}>Read More</Link>
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
