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
  data = {};
  constructor(props) {
    super(props);
    this.state = { alignmentState: "" };

    this.handleAlignmentChange = this.handleAlignmentChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
  }
  handleAlignmentChange(event) {
    console.log(event.target.value);
    this.setState({ alignmentState: event.target.value });
    this.data.alignmentValue = event.target.value;
    this.props.hello(this.data);
  }
  handleOwnerChange(event) {
    this.setState({ ownerState: event.target.value });
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.data.inputValue = e.target.value;
    this.props.hello(this.data);
  };
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
        {this.props.error ? <div className="redError">Required</div> : null}
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
        <div className="form-group dropBox">
          <select
            id="inputState"
            className="form-control"
            value={this.state.ownerState}
            onChange={this.handleOwnerChange}
          >
            <option value="">Choose...</option>
            <option value="Individual">Individual</option>
            <option value="Multiple">Multiple</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
        <br />
        {this.state.ownerState === "Multiple" ||
        this.state.ownerState === "Shared"
          ? [
              <Input
                id="user-name"
                value="Mary Watson"
                disabled
                required={true}
              />,
              <span className="pull-right">+ Add User</span>,
              <br />
            ]
          : null}
        <h5> Alignment</h5>
        <div className="form-group dropBox">
          <select
            className="form-control"
            value={this.state.alignmentState}
            onChange={this.handleAlignmentChange}
            required={true}
          >
            <option value="">Choose...</option>
            <option value="functional">Functional Skills</option>
            <option value="bsc">BSC Category</option>
          </select>
        </div>
        {this.props.error ? <div className="redError">Required</div> : null}
        {this.state.alignmentState === "functional" ? (
          <RadioGroup
            aria-label="options"
            name="options"
            className={classes.group}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="Engineering"
              control={<Radio />}
              label="Engineering"
            />
            <FormControlLabel
              value="Design"
              control={<Radio />}
              label="Design"
            />
            <FormControlLabel value="Sales" control={<Radio />} label="Sales" />
          </RadioGroup>
        ) : null}
        {this.state.alignmentState === "bsc" ? (
          <RadioGroup
            aria-label="options"
            name="options"
            className={classes.group}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label="Business"
            />
            <FormControlLabel
              value="People"
              control={<Radio />}
              label="People"
            />
            <FormControlLabel
              value="Process"
              control={<Radio />}
              label="Process"
            />
            <FormControlLabel
              value="Customer"
              control={<Radio />}
              label="Customer"
            />
          </RadioGroup>
        ) : null}
      </FormControl>
    );
  }
}

AccordionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccordionForm);
