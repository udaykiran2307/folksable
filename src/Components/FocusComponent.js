import { Box, Grid } from "@mui/material";
import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
const FocusComponent = () => {
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
            <h2 style={{ marginBottom: "-1.3rem" }}>Focus on</h2>
            <h2 style={{ marginBottom: "1rem" }}>what matters to you.</h2>
            <p>
              “Discover the power of reward design working for you, rather than
              keeping you hooked.”
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://discord.com/invite/EgQstfS2xj"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "#F1D4D4",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  Join Folks for Accountability
                </p>
              </a>
              <a
                href="https://discord.com/invite/EgQstfS2xj"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowRightRoundedIcon sx={{ color: "#F1D4D4", marginTop:'7px'}} />
              </a>
            </div>
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
            src="Group 7.png"
            alt="group7"
            style={{
              // maxHeight: "450px",
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

export default FocusComponent;
