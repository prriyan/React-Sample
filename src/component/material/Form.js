import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Button, input } from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
class OutlinedTextFields extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        align="center"
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          align="center"
          id="outlined-full-width"
          label="Name"
          style={{ margin: "10px", width: "500px" }}
          placeholder="Enter your name "
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          id="outlined-full-width"
          label="age"
          align="center"
          style={{ margin: "10px", width: "500px" }}
          placeholder="Enter your age"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <TextField
          id="outlined-full-width"
          label="tel"
          align="center"
          style={{ margin: "10px", width: "500px" }}
          placeholder="Enter your phone Number"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <TextField
          padding="50px"
          id="outlined-email-input"
          style={{ margin: "10px", width: "500px" }}
          label="Enter your Email"
          align="center"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          placeholder="name"
        />

        <Button
          colour="#9c27b0"
          variant="contained"
          type="submit"
          align="center"
          style={{ width: "500px", padding: "15px", margin: "10px" }}
        >
          SUBMIT
        </Button>
      </form>
    );
  }
}
OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
