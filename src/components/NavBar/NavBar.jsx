import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";

import { Link } from "react-router-dom";

import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
  Search,
} from "@mui/icons-material";

import { Sidebar } from "..";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit">
            <Brightness4 />
          </IconButton>
          <Search />
          <Avatar
            style={{ width: 30, height: 30 }}
            alt="Profile"
            src={``}
          />
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            <Sidebar />
          </Drawer>
          )
        </nav>
      </div>
    </>
  );
};

export default NavBar;
