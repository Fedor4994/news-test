import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface SortProps {
  onSortChange(value: string): void;
}

const Sort = ({ onSortChange }: SortProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSortChange((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "45%",
        gap: 3,
      }}
    >
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="new first"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value="new first"
          control={<Radio color="secondary" />}
          label="New first"
        />
        <FormControlLabel
          value="old first"
          control={<Radio color="secondary" />}
          label="Old first"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Sort;
