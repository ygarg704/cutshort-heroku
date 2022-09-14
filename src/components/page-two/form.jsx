import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useStyle } from "./index.theme";
import { useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const FormTwo = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/thirdPage");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.formBasic}
    >
      <form className={classes.formOne} onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <span className={classes.labelText}>Workspace Name</span>
          <TextField
            id="workspace_name"
            variant="outlined"
            placeholder="Eden"
          />
          <span className={classes.labelText}>
            Workspace URL <span style={{ color: "gray" }}>(optional)</span>
          </span>
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="example"
            startAdornment={
              <InputAdornment position="start" sizeSmall>
                www.eden.com/
              </InputAdornment>
            }
          />
          <Button
            type="submit"
            style={{ backgroundColor: "#664de5", textTransform: "none" }}
            variant="contained"
          >
            Create Workspace
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export { FormTwo };
