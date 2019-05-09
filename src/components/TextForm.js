import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  input: {
    margin: theme.spacing.unit
  }
});

class TextForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <FormControl fullWidth className={classes.margin}>
        <Input
          placeholder="Enter Title"
          id="adornment-amount"
          required={true}
          onChange={this.handleInputChange}
        />
        <br />
        <h5> Description </h5>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
      </FormControl>
    );
  }
}

TextForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextForm);
