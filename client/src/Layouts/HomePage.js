import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { Grid, Typography, Button } from "@material-ui/core";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 }
};

function HomePage() {
  return (
    <Fragment>
      <Helmet>
        <style>{"body { background-color: #003366;}"}</style>
        <title>Home</title>
      </Helmet>
      <Grid
        container
        spacing={10}
        direction="column"
        justify="center"
        alignItems="center"
        style={style.GridColor}
      >
        <Grid item direction="row" justify="center" alignItems="center">
          <Typography style={style.HomeHeader} variant="h2">
            Blink Exchange
          </Typography>
        </Grid>
        <Grid item direction="row" justify="center" alignItems="center">
          <Typography style={style.Paragraph} variant="h6">
            Migrating the process of exchanging goods and services on campus
            <br />
            from unorganized Facebook groups to a straightforward and quick.
            <br /> interface.
            <br />
            <br /> Sign in using your Google account to get started!
          </Typography>
        </Grid>
        <Grid
          spacing={10}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item direction="row" justify="center" alignItems="center">
            <Button
              style={style.Button}
              variant="contained"
              color="secondary"
              align="left"
              size="large"
              href="/buy"
            >
              <Typography style={style.HomeHeader} variant="h6">
                Buy
              </Typography>
            </Button>
            <Button
              style={style.Button}
              variant="contained"
              color="secondary"
              align="left"
              size="large"
              href="/sell"
            >
              <Typography style={style.HomeHeader} variant="h6">
                Sell
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default HomePage;
