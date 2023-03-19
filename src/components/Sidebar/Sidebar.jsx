import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import careerIcons from "../../assets/genres";
import skilbi_green from "../../assets/images/skilbi_green.svg";

const categories = [
  { label: "Product Manager", value: "product_manager" },
  { label: "Front End Dev", value: "frontend" },
  { label: "Back End Dev", value: "backend" },
  { label: "IOS Dev", value: "ios" },
  { label: "Android Dev", value: "android" },
  { label: "Marketing", value: "marketing" },
];

const blueLogo = skilbi_green;

const Sidebar = ({ }) => {
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={blueLogo}
          alt="Skilbi logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Career Paths</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
            >
              <ListItemIcon>
                <img
                  src={careerIcons[label.toLowerCase()]}
                  className={classes.genreImages}
                  height={30}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
