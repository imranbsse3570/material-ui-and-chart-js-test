import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormDetails from "./FormDetails";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "25px auto 10px",
    textAlign: "center",
    width: 400,
    height: 380,
    padding: 20,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <FormDetails />
      </Paper>
    </div>
  );
}
