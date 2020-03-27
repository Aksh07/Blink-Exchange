import React, { Component } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  Typography
} from "@material-ui/core";

const classes = {
  root: {
    maxWidth: 345
  },
  media: {
    height: 140,
    paddingTop: "56%"
  }
};

class BuyCard extends Component {
  state = {};
  render() {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={classes.media}
            image={this.props.imgSrc}
            title={this.props.productName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.productName}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              Type Of Service: {this.props.typeOfService}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              Earliest Date of Delivery: {this.props.dateOfDelivery}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.comment}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Place a Bid
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default BuyCard;
