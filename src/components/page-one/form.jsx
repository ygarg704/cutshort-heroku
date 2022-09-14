import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useStyle } from "./index.theme";
import { useNavigate } from "react-router-dom";

const FormOne = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/secondPage");
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
          <span className={classes.labelText}>Full Name</span>
          <TextField
            id="full_name"
            variant="outlined"
            placeholder="Steve Jobs"
          />
          <span className={classes.labelText}>Display Name</span>
          <TextField id="display_name" variant="outlined" placeholder="Steve" />
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

export { FormOne };
