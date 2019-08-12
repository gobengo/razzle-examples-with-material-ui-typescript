import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    margin: theme.spacing(3),
    paddingBottom: 16,
    paddingTop: 16,
  }),
}));

const App = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h3">This is a sheet of paper.</Typography>
      <Typography variant="body1" component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
    </Paper>
  );
};

export default App;
