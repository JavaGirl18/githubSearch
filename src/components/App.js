import React from "react";
import { MainLayout } from ".";
import { Grid } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Grid
      className="App"
      container
      textAlign="center"
      style={{ border: "solid" }}
    >
      <MainLayout />
    </Grid>
  );
}

export default App;
