import { useState } from "react";
import styled from "@mui/material/styles/styled";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
// STYLED COMPONENTS
const AppButtonRoot = styled("div")(({ theme }) => ({
  display: "flex",
  "& .formControl": { margin: theme.spacing(2) }
}));

export default function FormGroupCheckbox() {
  const [state, setState] = useState({ gilad: true, jason: false, antoine: false });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <AppButtonRoot>
      <FormControl component="fieldset" className="formControl">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange("gilad")} value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange("jason")} value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange("antoine")} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>

      <FormControl required error={error} component="fieldset" className="formControl">
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange("gilad")} value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange("jason")} value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange("antoine")} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>

        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </AppButtonRoot>
  );
}
