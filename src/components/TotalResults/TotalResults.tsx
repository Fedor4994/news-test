import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const TotalResults = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const res = await fetch(
      "https://api.spaceflightnewsapi.net/v3/articles/count"
    );
    const count = await res.json();
    setCount(count);
  };

  return (
    <Typography borderBottom="1px solid #bbb" marginBottom={4} fontSize={12}>
      Results: {count}
    </Typography>
  );
};

export default TotalResults;
