import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { News } from "../types/news";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
          height="200"
          image={info.image}
        />
        <CardContent>
          <Typography
            sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 0.5 }}
            fontSize={14}
            color="text.secondary"
          >
            <CalendarMonthIcon fontSize="inherit" />
            {joinedDate}
          </Typography>
          <Typography gutterBottom fontSize={18} component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" fontSize={14} color="text.secondary">
            {`${info.summary.slice(0, 100)}...`}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: "auto", padding: "6px 16px" }}>
          <Typography
            gutterBottom
            fontSize={14}
            fontWeight={700}
            component="span"
          >
            <Link
              to={`/${info.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Read More
              <ArrowForwardIcon fontSize="inherit" />
            </Link>
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
