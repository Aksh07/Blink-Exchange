import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet'
import {Header} from './Containers'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  Typography,
	Grid
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
//import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//var React = require('react');

const classes = {
	root: {
		maxWidth: 345,
		
	},
	
	media: {
		height: 140,
		paddingTop: "56%"
	}
}

const style = {
  GridColor: { color: "#003366" },
  HomeHeader: { font: "Roboto", color: "white", marginTop: 10 },
  Paragraph: { font: "Times New Roman", color: "white", fontStyle: "italic" },
  Button: { marginLeft: 20, marginRight: 20 },
	CardColor: {background: "cornflowerblue"},
	CardColor2: {background: "steelblue"}
};

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

class BuyCatalog extends React.Component{
	
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Fragment>
      <Helmet>
        <style>{"body { background-color: #003366;}"}</style>
        <title>Buy</title>
      </Helmet>
      <Header />
	  <br/><br/>
			
			</Fragment>
		)
	}
}

export default BuyCatalog;