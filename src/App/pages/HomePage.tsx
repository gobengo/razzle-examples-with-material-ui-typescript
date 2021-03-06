import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    margin: theme.spacing(3),
    paddingBottom: 16,
    paddingTop: 16,
  }),
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h3">HomePage</Typography>
      <Typography variant="body1" component="p">
        There's no place like home.
      </Typography>
    </Paper>
  );
};

export default HomePage;
