import { Typography } from "@mui/material";
import React from "react";
interface TotalResultsProps {
  total: number;
}

const TotalResults = ({ total }: TotalResultsProps) => {
  return (
    <Typography borderBottom="1px solid #bbb" marginBottom={4} fontSize={12}>
      Results: {total}
    </Typography>
  );
};

export default TotalResults;
