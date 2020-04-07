import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import {
  Grid,
  Select,
  Paper,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";

const style = {
  GridColor: {
    backgroundColor: "#003366",
    marginTop: 100,
  },
  FormHeader: { font: "Roboto" },
  Button: { marginLeft: 20, marginRight: 20 },
  TextField: { font: "Roboto" },
};

class BuyForm extends Component {
  state = {
    productName: "",
    emailId: "",
    contactNo: "",
    currentDate: "2020-03-21",
    typeOfService: "",
    comments: "",
  };

  handleNameChange = (newValue) => {
    this.setState({ productName: newValue.target.value });
  };

  handleEmailChange = (newValue) => {
    this.setState({ emailId: newValue.target.value });
  };

  handlePhoneChange = (newValue) => {
    this.setState({ contactNo: newValue.target.value });
  };

  handleDateChange = (newValue) => {
    this.setState({ currentDate: newValue.target.value });
  };

  handleServiceChange = (newValue) => {
    this.setState({ typeOfService: newValue.target.value });
  };

  handleCommentChange = (newValue) => {
    this.setState({ comments: newValue.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/apis/post/sell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: JSON.parse(sessionStorage.getItem("userData").userName),
        productName: this.state.productName,
        emailId: this.state.emailId,
        contactNo: this.state.contactNo,
        typeOfService: this.state.typeOfService,
        lastDeliveryDate: this.state.currentDate,
      }),
    });
    if (response.status === 200) {
      window.location.href = "/";
    } else this.handleClear();
  };

  handleClear = async (event) => {
    event.preventDefault();
    this.setState({
      productName: "",
      contactNo: "",
      currentDate: "2020-03-21",
      typeOfService: "",
      email: "",
      comments: "",
    });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <style>{"body { background-color: #003366;}"}</style>
          <title>Add a Buy Request</title>
        </Helmet>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          style={style.GridColor}
        >
          <Grid item xs={6} md={8}>
            <Paper elevation={3}>
              <Typography
                className={style.FormHeader}
                variant="h4"
                gutterBottom
                align="center"
              >
                Buy Request Form
              </Typography>
              <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={6} md={5}>
                  <TextField
                    required
                    id="name"
                    label="Name of Product/Service"
                    value={this.state.productName}
                    onChange={this.handleNameChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} md={5}>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    value={this.state.emailId}
                    onChange={this.handleEmailChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} md={5}>
                  <TextField
                    required
                    id="dateOfDelivery"
                    type="date"
                    label="Last Date of Delivery"
                    value={this.state.currentDate}
                    onChange={this.handleDateChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} md={5}>
                  <FormControl required fullWidth>
                    <InputLabel id="select-service-label">
                      Type of Product/Service
                    </InputLabel>
                    <Select
                      labelId="select-service-label"
                      id="select-service"
                      value={this.state.typeOfService}
                      onChange={this.handleServiceChange}
                    >
                      <MenuItem value="Books">Books</MenuItem>
                      <MenuItem value="Sports Equipment">
                        Sports Equipment
                      </MenuItem>
                      <MenuItem value="Electronics">Electronics</MenuItem>
                      <MenuItem value="Clothing">Clothing</MenuItem>
                      <MenuItem value="Service">Service</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={5}>
                  <TextField
                    required
                    id="phone"
                    label="Phone Number"
                    fullWidth
                    value={this.state.contactNo}
                    onChange={this.handlePhoneChange}
                  />
                </Grid>
                <Grid item xs={6} md={5}>
                  <TextField
                    id="comments"
                    label="Additional Comments"
                    value={this.state.comments}
                    onChange={this.handleCommentChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={style.Button}
                    onClick={this.handleSubmit}
                    size="large"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={4} md={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={style.Button}
                    size="large"
                    onClick={this.handleClear}
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default BuyForm;
