import React, { Fragment } from "react";
import { Header } from "../Containers";
import Helmet from "react-helmet";
import { Grid, Typography, Button } from "@material-ui/core";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 }
};

function Buy() {
  return (
    <Fragment>
      <Helmet>
        <style>{"body { background-color: #003366;}"}</style>
      </Helmet>
      <Header />
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
            Have a look through the catalog.
            <br />
            Or maybe search for something you want.
            <br />
            Or why not add something you'd like to buy?
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
              href="/buyCatalog"
            >
              <Typography style={style.HomeHeader} variant="h6">
                Catalog
              </Typography>
            </Button>
            <Button
              style={style.Button}
              variant="contained"
              color="secondary"
              align="left"
              size="large"
              href="/searchBuy"
            >
              <Typography style={style.HomeHeader} variant="h6">
                Search for an Item
              </Typography>
            </Button>
            <Button
              style={style.Button}
              variant="contained"
              color="secondary"
              align="left"
              size="large"
              href="/addNewBuy"
            >
              <Typography style={style.HomeHeader} variant="h6">
                Add a new Item
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Buy;
