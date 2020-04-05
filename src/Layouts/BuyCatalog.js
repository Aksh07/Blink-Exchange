import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BuyCard } from "../Containers";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 },
  CardColor: { background: "cornflowerblue" },
  CardColor2: { background: "steelblue" },
};

const items = [
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Elephant",
    type: "Service",
    imgURL:
      "https://images.unsplash.com/photo-1583265512283-2d72b64974a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
  {
    name: "Bat",
    type: "Product",
    imgURL:
      "https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    lastDate: "03/02/2020",
    desc: "tba",
  },
];

function BuyCatalog() {
  return (
    <Fragment>
      <Helmet>
        <style>{"body { background-color: #003366;}"}</style>
        <title>Browse the Buyer's Catalog</title>
      </Helmet>
      <br />
      <br />
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
      </Grid>
      <br />
      <br /> <br />
      <MuiThemeProvider>
        <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800,
          }}
        />
      </MuiThemeProvider>
      <br />
      <br /> <br />
      <Grid
        container
        spacing={10}
        direction="column"
        justify="center"
        alignItems="flex-end"
        style={style.GridColor}
        md="12"
      >
        <Grid
          item
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="space-around"
        >
          <Typography style={style.HomeHeader} variant="h6">
            Sort by :&nbsp;&nbsp;
            <select>
              <option value="name">Name</option>
              <option value="dod">Date of Delivery</option>
              <option value="price">Price</option>
            </select>
            <svg height="50" width="50">
              <rect x="10" y="29" height="5" width="30" fill="#F50057" />
              <rect x="10" y="37" height="5" width="20" fill="#F50057" />
              <rect x="10" y="45" height="5" width="10" fill="#F50057" />
            </svg>
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <div style={{ padding: 50 }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          md="12"
          alignItems="center"
          spacing="8"
        >
          {items.map((newItem) => {
            return (
              <Grid item md="3" direction="column">
                <BuyCard item={newItem} />
              </Grid>
            );
          })}
        </Grid>{" "}
      </div>
    </Fragment>
  );
}

export default BuyCatalog;
