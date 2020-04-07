import React, { Component, Fragment } from "react";
import { BuyCard } from "../Containers";
import Helmet from "react-helmet";
import { Grid, Typography } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  SearchBox: { width: 1000, height: 60 }
};

class BuySearch extends Component {
  state = {
    searchText: "",
    listOfItems: []
  };

  handleSearchChange = event => {
    this.setState({ searchText: event });
  };

  handleSearch = async () => {
    let requestString = "/apis/get/buy/getByName" + this.state.searchText;
    const response = await fetch(requestString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    if (response.status === 200 || response.status === 304) {
      const jsonResponse = await response.json();
      this.setState({ listOfItems: jsonResponse });
      this.renderCards();
    }
  };

  renderCards = (itemName, photoSrc, deliveryDate, typeOfService, comments) => {
    return (
      <Grid item xs={5} md={5}>
        <BuyCard
          productName={itemName}
          imgSrc={photoSrc}
          dateOfDelivery={deliveryDate}
          typeOfService={typeOfService}
          comment={comments}
        />
      </Grid>
    );
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <style>{"body { background-color: #003366;}"}</style>
          <title>Search an Item to Buy</title>
        </Helmet>
        <Grid
          container
          spacing={8}
          direction="column"
          justify="center"
          alignItems="center"
          style={style.GridColor}
        >
          <Grid item xs={12} md={12}>
            <Typography style={style.HomeHeader} variant="h2">
              Blink Exchange
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <MuiThemeProvider>
              <SearchBar
                value={this.state.searchText}
                onChange={this.handleSearchChange}
                style={style.SearchBox}
                onRequestSearch={this.handleSearch}
              />
            </MuiThemeProvider>
          </Grid>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          ></Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default BuySearch;
