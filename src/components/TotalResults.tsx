import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

interface TotalResultsProps {
  filter: string;
}

const TotalResults = ({ filter }: TotalResultsProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/count?title_contains=${filter}`
      );
      const count = await res.json();
      setCount(count);
    };

    getCount();
  }, [filter]);

  return (
    <Typography borderBottom="1px solid #bbb" marginBottom={4} fontSize={16}>
      Results: {count}
    </Typography>
  );
};

export default TotalResults;
