import * as React from "react";
import Grid from "@material-ui/core/Grid";
import VerticalLinearStepper from "./components/VerticalLinearStepper";
import ExpansionPanels from "./components/ExpansionPanels";
import CardPanel from "./components/CardPanel";

class App extends React.Component {
  render() {
    return (
      <Grid container spacing={24} className="mainContainer">
        <Grid item xs={2}>
          <VerticalLinearStepper />
        </Grid>
        <Grid item xs={7}>
          <ExpansionPanels />
        </Grid>
        <Grid item xs={3}>
          <CardPanel />
        </Grid>
      </Grid>
    );
  }
}

export default App;
