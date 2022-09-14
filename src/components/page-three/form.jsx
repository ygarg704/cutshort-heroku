import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import { useStyle } from "./index.theme";
import { useNavigate } from "react-router-dom";

const FormThree = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/finalPage");
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
          <Grid container direction="row" spacing={1}>
            <Grid item sm={6} xs={12}>
              <Card>
                <CardActionArea className={classes.actionArea}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <PersonIcon />
                    </Typography>
                    <Typography variant="body2">
                      Write better. Think more clearly. Stay organized.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card>
                <CardActionArea className={classes.actionArea}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <GroupsIcon />
                    </Typography>
                    <Typography variant="body2">
                      Wikis, docs, tasks & projects, all in one place.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
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

export { FormThree };
