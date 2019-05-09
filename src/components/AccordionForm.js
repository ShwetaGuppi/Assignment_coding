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
    this.setState({ alignmentState: event.target.value });
    this.data.alignmentValue = event.target.value;
    this.props.passingFunctionAlignment(this.data);
  }
  handleOwnerChange(event) {
    this.setState({ ownerState: event.target.value });
  }

  handleInputChange = e => {
    this.data.inputValue = e.target.value;
    this.props.passingFunctionInput(this.data);
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
        {this.props.showErrorInput ? (
          <div className="redError">Required</div>
        ) : null}
        <br />
        <h5> Description </h5>
        <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Description"
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
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flistimg.pinclipart.com%2Fpicdir%2Fs%2F133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png&imgrefurl=https%3A%2F%2Fwww.pinclipart.com%2Fpindetail%2FbTbJiJ_free-user-avatar-icons-happy-flat-design-png%2F&docid=y0jZktrZJ0buRM&tbnid=rwDuIriMfV-F8M%3A&vet=10ahUKEwiru6TXwY7iAhUhmeYKHYKsDZIQMwiRASgqMCo..i&w=320&h=320&bih=939&biw=1680&q=icon%20of%20users&ved=0ahUKEwiru6TXwY7iAhUhmeYKHYKsDZIQMwiRASgqMCo&iact=mrc&uact=8"
                alt="iconImg"
                className="pull-left"
              />,
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
            s
            value={this.state.alignmentState}
            onChange={this.handleAlignmentChange}
            required={true}
          >
            <option value="">Choose...</option>
            <option value="functional">Functional Skills</option>
            <option value="bsc">BSC Category</option>
          </select>
        </div>
        {this.props.showErrorAlignment ? (
          <div className="redError">Required</div>
        ) : null}
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
