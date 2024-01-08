import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FocusComponent from "./Components/FocusComponent";
import GoalComponent from "./Components/GoalComponent";
import ScheduleComponent from "./Components/ScheduleComponent";
import ShareComponent from "./Components/ShareComponent";
import ProgressComponent from "./Components/ProgressComponent";

const AppStoreComponent = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop:'4rem'}} >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="Logo_WBorderfolksableIcon.png"
            alt="icon"
            style={{ maxWidth: "100px" }}
          ></img>
          <h2>the modern struggle.</h2>
          <p style={{ alignContent: "center", textAlign:'center', }}>
            “All of humanity's problems stem from man's inability to sit quietly
            in a room alone.”
          </p>
          <h4 style={{ marginBottom:'3rem', fontSize:'14px' }}> ~ <span style={{textDecoration:'underline'}}>Blaise Pascal, Pensées</span></h4>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                marginBottom:'3rem'
              }}
            >
             <a
              href='https://apps.apple.com/in/app/folksable-photo-habit-tracker/id6473078578'
              target="_blank"
              rel="noreferrer"
             > <img
                src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 1appstore.png"
                alt="appstore"
                style={{  height: "68px", width:'250px',objectFit:'contain'}}
              ></img></a>
              <a
               href='https://play.google.com/store/apps/details?id=com.folksable.app'
               target="_blank"
               rel="noreferrer"
              ><img
                src="google-play-badge 1.png"
                alt="playstore"
                style={{  height: "68px", width:'250px',objectFit:'contain' }}
              ></img>
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
            src="Frame 275.png"
            alt="card"
            style={{
              // maxHeight: "500px",
              maxWidth: "500px",
              alignContent: "center",
              width: "100%",
            }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
};

function App() {
  return (
    <div className="folksable">
    <AppStoreComponent/>
    <FocusComponent/>
    <GoalComponent/>
    <ScheduleComponent/>
    <ShareComponent/>
    <ProgressComponent/>
    </div>
  );
}

export default App;
