import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardHeader,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@material-ui/core";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 },
  CardColor: { background: "cornflowerblue" },
  CardColor2: { background: "steelblue" },
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BuyCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [bidValue, setBidValue] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setBidValue("");
    setOpen(false);
  };

  const handleBidChange = (event) => {
    setBidValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (bidValue === "") return;
    console.log(item);
    let postItem = await {
      user: await JSON.parse(sessionStorage.getItem("userData")).googleId,
      _id: await item._id,
      //bid: await bidValue,
    };
    let queryString =
      "/apis/put/placeBidfor" + (await JSON.stringify(postItem));
    const response = await fetch(queryString, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      setBidValue("");
      setOpen(false);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={style.CardColor2}>
      <CardHeader
        action={
          <IconButton aria-label="Place a bid" onClick={handleOpen}>
            <FavoriteIcon />
          </IconButton>
        }
        title={item.productName}
        subheader={item.typeOfService}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Place a Bid</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Describe what you would like to offer to the seller to buy this
            item.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={handleBidChange}
            id="name"
            label="Your Bid"
            type="email"
            value={bidValue}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Place
          </Button>
        </DialogActions>
      </Dialog>
      <CardMedia
        className={classes.media}
        image={item.photoUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Last Date of Delivery: {item.lastDeliveryDate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{item.desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
