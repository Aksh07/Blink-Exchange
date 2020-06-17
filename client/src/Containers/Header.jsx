import React, { Component } from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Grid
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import "typeface-roboto";
const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 },
};
const classes = {
  Typography: {
    font: "Roboto",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  para: {
    marginRight: 1,
  },
};

class Header extends Component {
  state = {
    anchorEl: null,
    isAuth: false,
    userName: "",
    open: false,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget, open: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };

  handleHome = () => {
    window.location.href = "/";
  };

  handleBuy = () => {
    window.location.href = "/buy";
  };

  handleSell = () => {
    window.location.href = "/sell";
  };
   handleDashboard = () => {
    window.location.href = "/dashboard/default";
  };


  getAuth = () => {
    return this.state.isAuth;
  };

  handleLogin = () => {
    const currState = this.state.isAuth;
    if (currState === false) {
      this.setState(
        {
          userName: "Kunal",
          isAuth: true,
        },
        this.setState({
          loginUserMessage: "Hello " + this.state.userName,
          loginButtonLabel: "Logout",
        })
      );
    } else {
      this.setState({
        loginUserMessage: "",
        loginButtonLabel: "Login",
        isAuth: false,
      });
    }
  };

  responseSuccessLogin = async (res) => {
    let postData = {
      googleId: res.profileObj.googleId,
      userName: res.profileObj.name,
      email: res.profileObj.email,
      access_token: res.tokenObj.access_token,
    };
    const query1 = "apis/get/users/getByUserId" + postData.googleId;
    const response1 = await fetch(query1, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response1.status === 200 || response1.status === 304) {
      let searchResponse = await response1.json();
      sessionStorage.setItem("userData", JSON.stringify(searchResponse));
      this.setState({ isAuth: true, userName: searchResponse.userName });
    } else {
      const response = await fetch("/apis/post/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (response.status === 200 || response.status === 304) {
        sessionStorage.setItem("userData", JSON.stringify(postData));
        this.setState({ isAuth: true, userName: postData.userName });
      }
    }
  };

  responseFailLogin = (response) => {
    console.log(response);
  };

  responseSuccessLogout = (response) => {
    sessionStorage.clear();
    this.setState({ isAuth: false, userName: "" });
    window.location.href = "/";
  };

  responseFailLogout = (response) => {
    console.log(response);
  };

  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      const name = JSON.parse(sessionStorage.getItem("userData")).userName;
      this.setState({
        userName: name,
        isAuth: true,
      });
    }
  }

  render() {
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
            onClick={this.handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menuList"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={this.state.open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleHome}>Home</MenuItem>
            <MenuItem onClick={this.handleBuy}>Buy</MenuItem>
            <MenuItem onClick={this.handleSell}>Sell</MenuItem>
            <MenuItem onClick={this.handleDashboard}>Dashboard</MenuItem>

          </Menu>
          <Typography
            className={classes.title}
            variant="h5"
            color="inherit"
            style={classes.title}
          >
            BLINK EXCHANGE
          </Typography>
         
  
          <Typography
           // className={classes.dashboard}
            variant="h6"
            color="inherit"
           href="/dashboard/default"
            //style={classes.dashboard}
            onClick={this.handleDashboard}
            align="left"
            display="block"
       
          >
            DASHBOARD
          </Typography>
             <Typography
           // className={classes.dashboard}
            variant="body1"
            color="inherit"
           //href="/dashboard/default"
            //style={classes.dashboard}
            //onClick={this.handleDashboard}
            align="left"
            display="block"
            align="center"
       
          >
                 @
          </Typography>
       
          <Typography variant="p" style={classes.para}>
           {this.state.userName}
          </Typography>
          {this.renderAuth()}
        </Toolbar>
      </AppBar>
    );
  }

  renderAuth = () => {
    if (!sessionStorage.getItem("userData") && this.state.isAuth === false) {
      return (
        <GoogleLogin
          clientId="453656988650-dt7bjlklsjgd66jm3351e4tcv47hf2b2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseSuccessLogin}
          onFailure={this.responseFailLogin}
          cookiePolicy={"single_host_origin"}
        />
      );
    } else {
      return (
        <GoogleLogout
          clientId="453656988650-dt7bjlklsjgd66jm3351e4tcv47hf2b2.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.responseSuccessLogout}
          onFailure={this.responseFailLogout}
        />
      );
    }
  };
}

export default Header;
