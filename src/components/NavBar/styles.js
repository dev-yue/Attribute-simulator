import { makeStyles } from "@mui/styles";

const drawerWidth = 240

export default makeStyles(() => ({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    backgroundColor: "#00315c!important",

  },
  menuButton: {
  },
  drawer: {
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    '&:hover' : {
        color: 'white !important',
        textDecoration: 'none',
    }
  },
}));
