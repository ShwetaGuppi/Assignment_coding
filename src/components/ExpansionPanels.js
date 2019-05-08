import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionForm from "./AccordionForm";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit
  }
});

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#f5f5f5",
    color: "black",
    borderBottom: "1px solid rgba(0,0,0,.125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

class ExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3> Define Objective </h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AccordionForm />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3> KRA </h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AccordionForm />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3> Weightage and Privacy </h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AccordionForm />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <form className="buttonAlign" onSubmit={this.handleSubmit}>
          <Button variant="contained" className={classes.button}>
            Clear Now
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            type="submit"
            value="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

ExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExpansionPanels);
