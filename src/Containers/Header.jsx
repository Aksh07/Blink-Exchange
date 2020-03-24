import React from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  const handleBuy = () => {
    window.location.href = "/buy";
  };

  const handleSell = () => {
    window.location.href = "/sell";
  };

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          aria-controls="menuList"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menuList"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleHome}>Home</MenuItem>
          <MenuItem onClick={handleBuy}>Buy</MenuItem>
          <MenuItem onClick={handleSell}>Sell</MenuItem>
        </Menu>
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
