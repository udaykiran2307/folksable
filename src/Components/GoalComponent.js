import React from "react";
import { Box, Grid } from "@mui/material";
import "../App.css"
const GoalComponent = () => {
  
  return (
    <Box sx={{ flexGrow: 1, marginTop: "3rem" }}>
      <Grid container spacing={1} className='goalCompi'>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <img
            src="Group 9.png"
            alt="group7"
            style={{
            //   maxHeight: "400px",
              maxWidth: "400px",
              alignContent: "center",
              width: "100%",
            }}
          ></img>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <h2 style={{ marginBottom: "-1.3rem" }}>Never trade short term </h2>
            <h2 style={{ marginBottom: "1rem" }}>
              desires with long term goals.{" "}
            </h2>
            <p>
              “The body should be treated rigorously, that it may not be
              disobedient to the mind.” 
            </p>
            <h5 style={{fontWeight:'bolder', marginTop:'0rem'}}>~ <span style={{textDecoration:'underline'}}>Seneca</span> </h5>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GoalComponent;
