import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { InputAdornment, TextField } from "@mui/material";

const Filter = () => {
  return (
    <>
      <TextField
        label="Filter by keywords"
        fullWidth
        size="small"
        color="secondary"
        sx={{ marginBottom: "20px" }}
        placeholder="Something about space..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ManageSearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Filter;
