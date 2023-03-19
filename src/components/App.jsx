import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import useStyles from "./styles";
import { MovieInformation, Main, NavBar, ProfileDetail } from "./";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <CssBaseline />
        <NavBar />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/approved" element={<Main />} />
          <Route
            exact
            path="/activity_detail/:id"
            element={<MovieInformation />}
          />
          <Route exact path="/profile_detail/:id" element={<ProfileDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
