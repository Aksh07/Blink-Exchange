import React from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import "typeface-roboto";

const style = {};

const useStyles = makeStyles(theme => ({
  Typography: {
    font: "Roboto"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          variant="h5"
          color="inherit"
          style={style.Typography}
        >
          BLINK EXCHANGE
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
