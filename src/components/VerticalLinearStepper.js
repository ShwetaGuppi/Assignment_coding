import React from "react";
import "../css/Custom.css";

class VerticalLinearStepper extends React.Component {
  render() {
    return (
      <div className="stepperContainer">
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

export default VerticalLinearStepper;
