import { Box, Grid } from "@mui/material";
import React from "react";

const ShareComponent = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "3rem" }}>
      <Grid container spacing={1}>
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
            <h2 style={{ marginTop: "-1rem" }}>Share Photo Updates of Your</h2>
            <h2 style={{ marginTop: "-1rem" }}>Rituals and Todo’s</h2>
            <p>
              “Humans have a need to be highly consistent with their past
              pronouncements.”
            </p>
            <h4  style={{fontSize:'14px' }}>~ <span style={{textDecoration:'underline'}}>Naval Ravikant</span></h4>
          </div>
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
          <img
            src="Group 10.png"
            alt="group7"
            style={{
            //   maxHeight: "400px",
              maxWidth: "400px",
              alignContent: "center",
              width: "100%",
            }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShareComponent;
