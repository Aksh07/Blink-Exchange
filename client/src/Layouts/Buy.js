import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { Grid, Typography, Button } from "@material-ui/core";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 },
};

function Buy() {
  React.useEffect(() => {
    sessionStorage.removeItem("buySearchData");
    sessionStorage.removeItem("sellSearchData");
  });

  return (
    <Fragment>
      <Helmet>
        <style>{"body { background-color: #003366;}"}</style>
        <title>Buy</title>
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
