import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function App() {
  return (
    <div>
      {/* <div>
        <img src="Logo_WBorderfolksableIcon.png" alt="icon"></img>
        <h2>the modern struggle.</h2>
        <p>
          “All of humanity's problems stem from man's inability to sit quietly
          in a room alone.” ~ Blaise Pascal, Pensées
        </p>
      </div> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img
              src="Logo_WBorderfolksableIcon.png"
              alt="icon"
              style={{ width: "156px", height: "169px" }}
            ></img>
            <h2>the modern struggle.</h2>
            <p
            style={{alignContent:'center'}}
            >
              “All of humanity's problems stem from man's inability to sit
              quietly in a room alone.”
            </p>
            <h4 style={{marginTop:'-1rem'}}> ~ Blaise Pascal, Pensées</h4>
            <div style={{ display: "flex" }}>
              <div
              style={{display:'flex', flexWrap:'wrap', alignItems:'center',gap:'20px',justifyContent:'center'}}
              >
              <img
                src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 1appstore.png"
                alt="appstore"
                style={{ width: "200px", height: "68px" }}
              ></img>
              <img
                src="google-play-badge 1.png"
                alt="playstore"
                style={{ width: "230px", height: "68px" }}
              ></img>
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
              alignContent:'center'
            }}
          >
            <img
              src="Frame 275.png"
              alt="card"
              style={{
                minHeight: "500px",
                maxWidth: "500px",
                alignContent: "center",
              }}
            ></img>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
