import React from "react";
interface TotalResultsProps {
  total: number;
}

const TotalResults = ({ total }: TotalResultsProps) => {
  return <h2>Results: {total}</h2>;
};

export default TotalResults;
