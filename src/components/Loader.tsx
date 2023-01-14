import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", pt: 1 }}>
      <CircularProgress sx={{ marginLeft: "auto", marginRight: "auto" }} />
    </Box>
  );
};

export default Loader;
