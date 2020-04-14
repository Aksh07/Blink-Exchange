import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { SellCard } from "../Containers";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 },
  CardColor: { background: "cornflowerblue" },
  CardColor2: { background: "steelblue" },
};

class SellCatalog extends Component {
  state = {
    searchText: "",
    renderItems: "",
  };

  async componentDidMount() {
    this.initialRenderItems();
    sessionStorage.removeItem("buySearchData");
  }

  initialRenderItems = async () => {
    if (sessionStorage.getItem("sellSearchData")) {
      const items = await JSON.parse(sessionStorage.getItem("sellSearchData"));
      if (items != null) {
        const returnObject = await items.map((newItem) => {
          return (
            <Grid item md="3" direction="column">
              <SellCard item={newItem} />
            </Grid>
          );
        });
        console.log(returnObject);
        await this.setState({ renderItems: returnObject });
      }
    } else {
      const query = await "/apis/get/sell";
      const response = await fetch(query, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.status === 200 || response.status === 304) {
        const result = await response.json();
        console.log(result);
        await sessionStorage.setItem(
          "sellSearchData",
          await JSON.stringify(result)
        );
      }
      const items = await JSON.parse(sessionStorage.getItem("sellSearchData"));
      console.log(items);
      if (items != null) {
        const returnObject = await items.map((newItem) => {
          return (
            <Grid item md="3" direction="column">
              <SellCard item={newItem} />
            </Grid>
          );
        });
        console.log(returnObject);
        await this.setState({ renderItems: returnObject });
      }
    }
  };
  handleSearchChange = (newValue) => {
    this.setState({ searchText: newValue });
  };

  handleRenderItems = (newValue) => {
    this.setState({ renderItems: newValue });
  };

  handleSearch = async () => {
    const query = await ("/apis/get/sell/getByName" + this.state.searchText);
    const response = await fetch(query, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.status === 200 || response.status === 304) {
      const result = await response.json();
      console.log(result);
      await sessionStorage.setItem(
        "sellSearchData",
        await JSON.stringify(result)
      );
      window.location.href = "/sellCatalog";
    }
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <style>{"body { background-color: #003366;}"}</style>
          <title>Browse the Seller's Catalog</title>
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
            onChange={this.handleSearchChange}
            onRequestSearch={this.handleSearch}
            style={{
              margin: "0 auto",
              maxWidth: 800,
            }}
            value={this.state.searchText}
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
            {this.state.renderItems}
          </Grid>{" "}
        </div>
      </Fragment>
    );
  }
}

export default SellCatalog;
