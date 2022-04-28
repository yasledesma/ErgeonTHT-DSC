import React from "react";
import StripeCalendar from "./components/StripeCalendar";
import { Grid, Typography } from "@mui/material";

const App = () => {
  return (
    <Grid
      className="App"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      display="flex"
      gap="2rem"
      style={{ minHeight: "100vh", background: "#e2fde8" }}
    >
      <Typography variant="h1" style={{ color: "#00b900", fontSize: "2.5rem" }}>
        Dates Stripe Component
      </Typography>
      <StripeCalendar /> 
    </Grid>
  );
};

export default App;
