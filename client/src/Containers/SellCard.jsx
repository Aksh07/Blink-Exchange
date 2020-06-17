import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardHeader,
  Collapse,
} from "@material-ui/core";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/Favorite";

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

export default function SellCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root} style={style.CardColor2}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={item.productName}
        subheader={item.typeOfService}
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
