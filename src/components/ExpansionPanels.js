import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import PaperSheet from "./Papers";

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
  input: {
    margin: theme.spacing.unit
  }
});

class ExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

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
            <Typography className={classes.heading}>
              General settings
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControl fullWidth className={classes.margin}>
              <Input placeholder="Enter Title" id="adornment-amount" />
              <br />
              <Typography className={classes.heading}>Description</Typography>
              <PaperSheet />
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExpansionPanels);
