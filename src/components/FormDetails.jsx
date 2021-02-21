import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Checkbox, makeStyles, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputFeildSignIn: {
    width: "100%",
    margin: "10px 0",
  },
}));

const FormDetails = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  return (
    <React.StrictMode>
      <h1>Sign In</h1>
      <form action="">
        <TextField
          className={classes.inputFeildSignIn}
          id="username-signin"
          label="Username"
          variant="outlined"
        />
        <TextField
          className={classes.inputFeildSignIn}
          id="password-signin"
          label="Password"
          variant="outlined"
        />
        <FormControlLabel
          className={classes.inputFeildSignIn}
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Remeber me"
        />
        <Button
          className={classes.inputFeildSignIn}
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      </form>
    </React.StrictMode>
  );
};

export default FormDetails;
