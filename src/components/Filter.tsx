import React, { useEffect } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { InputAdornment, TextField } from "@mui/material";
import { debounce } from "@mui/material/utils";
import { useAppDispatch } from "../redux-hooks";
import { setFilter } from "../features/Filter/filterSlice";
import { selectFilter } from "../features/Filter/filterSelectors";
import { useSelector } from "react-redux";

interface filterProps {
  onChange(): void;
}

const Filter = ({ onChange }: filterProps) => {
  const dispatch = useAppDispatch();
  const filterFromState = useSelector(selectFilter);

  const filterInput = document.querySelector("#filter") as HTMLInputElement;

  useEffect(() => {
    if (filterInput) {
      filterInput.value = filterFromState;
    }
  }, [filterInput, filterFromState]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value.trim()));
    onChange();
  };
  return (
    <>
      <TextField
        id="filter"
        onChange={debounce(handleChange, 500)}
        label="Filter news"
        autoComplete="off"
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
