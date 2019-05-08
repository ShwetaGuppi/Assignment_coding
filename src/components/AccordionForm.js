import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import DatePickers from "./DateForm";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  input: {
    margin: theme.spacing.unit
  }
});

class AccordionForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <FormControl fullWidth className={classes.margin}>
        <Input
          placeholder="Enter Title"
          id="adornment-amount"
          required={true}
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
        <br />
        <h5> Timeline </h5>
        <DatePickers />
        <br />
        <h5> Owner </h5>
        <div class="form-group dropBox">
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Individual</option>
            <option>Multiple</option>
            <option>Shared</option>
          </select>
        </div>
        <h5> Alignment </h5>
        <div class="form-group dropBox">
          <select id="inputState" class="form-control" required={true}>
            <option selected>Choose...</option>
            <option>Functional Skills</option>
            <option>BSC Category</option>
          </select>
        </div>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="Engineering"
            control={<Radio />}
            label="Engineering"
          />
          <FormControlLabel value="Design" control={<Radio />} label="Design" />
          <FormControlLabel value="Sales" control={<Radio />} label="Sales" />
        </RadioGroup>
      </FormControl>
    );
  }
}

AccordionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccordionForm);
