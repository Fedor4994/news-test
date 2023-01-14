import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Sort from "./Sort";
import { useAppSelector } from "../redux-hooks";
import { selectFilter } from "../features/Filter/filterSelectors";

interface TotalResultsProps {
  onSortChange(value: string): void;
}

const TotalResults = ({ onSortChange }: TotalResultsProps) => {
  const [count, setCount] = useState(0);
  const filter = useAppSelector(selectFilter);

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
    <Typography
      component="div"
      borderBottom="1px solid #bbb"
      marginBottom={4}
      fontSize={16}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      Results: {count}
      <Sort onSortChange={onSortChange} />
    </Typography>
  );
};

export default TotalResults;
