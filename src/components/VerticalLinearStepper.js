import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
import "../css/Custom.css";

const styles = theme => ({
  root: {
    width: "90%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

// function getSteps() {
//   return ["Define Objective", "KRA", "Weightage & Privacy", "Submit"];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`;
//     case 1:
//       return "An ad group contains one or more ads which target a shared set of keywords.";
//     case 2:
//       return `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`;
//     default:
//       return "Unknown step";
//   }
// }

class VerticalLinearStepper extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="step completed">
          <div className="v-stepper">
            <div className="circle" />
            <div className="line" />
          </div>

          <div className="content">Define Objective</div>
        </div>

        <div className="step active">
          <div className="v-stepper">
            <div className="circle" />
            <div className="line" />
          </div>

          <div className="content">KRA</div>
        </div>
        <div className="step">
          <div className="v-stepper">
            <div className="circle" />
            <div className="line" />
          </div>

          <div className="content">Weightage and Privacy</div>
        </div>

        <div className="step">
          <div className="v-stepper">
            <div className="circle" />
            <div className="line" />
          </div>

          <div className="content">Submit</div>
        </div>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classNamees: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
