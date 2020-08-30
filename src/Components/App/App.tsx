import React from "react";
import "./App.css";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import Grid from "@material-ui/core/Grid";

const App = () => {
  return (
    <div className="app-container">
      <Grid>
        <Title />
        <Timer />
      </Grid>
    </div>
  );
};

export default App;
