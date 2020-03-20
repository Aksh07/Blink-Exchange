import React, { Component, Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { Header } from "../Containers";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 }
};

class BuyCatalog extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Helmet>
          <style>{"body { background-color: #003366;}"}</style>
        </Helmet>
        <Header />
        <Typography
          align="center"
          style={style.HomeHeader}
          variant="h2"
          gutterBottom
        >
          Blink Exchange
        </Typography>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
          style={style.GridColor}
        ></Grid>
      </Fragment>
    );
  }
}

export default BuyCatalog;
