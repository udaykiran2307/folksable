import { Box, Grid } from '@mui/material'
import React from 'react'

const ScheduleComponent = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop:'3rem'}}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center'
          }}
        >
          <div
           style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign:'center',
            width:'100%'
          }}
          >
          <h2>Plan in decades,</h2>
          <h2 style={{marginTop:'-1rem'}}>play in minutes.</h2>
          <h2 style={{marginBottom:'-10px'}}>Versatile Schedules.</h2>
          <p>
          “Set your schedule as frequent as daily to as infrequent as once in 5 Years, and everything in between.”
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
            src="Frame 259.png"
            alt="group7"
            style={{
              maxHeight: "400px",
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

export default ScheduleComponent