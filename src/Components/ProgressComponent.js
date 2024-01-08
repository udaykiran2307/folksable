import { Box, Grid } from '@mui/material'
import React from 'react'

const ProgressComponent = () => {
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
            <h2 style={{ marginTop: "-1rem" }}>Check your friend’s progress,</h2>
            <h2 style={{ marginTop: "-1rem" }}>remind & get reminded.</h2>
            <p style={{textAlign:'center'}}>
            “Share Photo Check in to your Daily Events and 
maintain your streak for accountability.”
            </p>
            
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
            src="Group 8.png"
            alt="group7"
            style={{
            //   maxHeight: "500px",
              maxWidth: "400px",
              alignContent: "center",
              width: "100%",
            }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProgressComponent