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
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


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
classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
const handleExpandClick = () => {
    setExpanded(!expanded);
  };

class BuyCatalog extends React.Component{
	
	
 
  constructor(props){
	  super(props);
  
	var items = [{
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Elephant',
		type: 'Service',
		imgURL: 'https://images.unsplash.com/photo-1583265512283-2d72b64974a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}, {
		name: 'Bat',
		type: 'Product',
		imgURL: 'https://images.unsplash.com/photo-1583265072717-b68d14e15187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		lastDate: '03/02/2020',
		desc: 'tba'
	}]
	}	
render(){
return (
    
      <Fragment>
      <Helmet>
        <style>{"body { background-color: #003366;}"}</style>
        <title>Buy</title>
      </Helmet>
      <Header />
	  <br/><br/>
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
        </Grid></Grid>
	  <br/><br/> <br/>
	 
	  <MuiThemeProvider>
		  <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
			  /></MuiThemeProvider>
	  								
	  
	  <br/><br/> <br/>
				  
		<Grid
        container
        spacing={10}
        direction="column"
        justify="center"
        alignItems="flex-end"
        style={style.GridColor}
		md = "12"
      >
			
			
        <Grid item direction="row" justify="center" alignItems="center" alignContent = "space-around">
          <Typography style={style.HomeHeader} variant="h6">
            Sort by :&nbsp;&nbsp;
			<select>
				<option value = "name">Name</option>
				<option value = "dod">Date of Delivery</option>
				<option value = "price">Price</option>
				</select>
		<svg height = "50" width = "50">
			<rect x = "10" y = "29" height = "5" width = "30" fill = "#F50057"/>
			<rect x = "10" y = "37" height = "5" width = "20" fill = "#F50057"/>
			<rect x = "10" y = "45" height = "5" width = "10" fill = "#F50057"/>
		</svg>
          </Typography>
        </Grid></Grid>
	  <br/><br/> 		  
	  
	   
	 <div style = {{padding: 50}}><Grid container direction = "row" justify = "space-evenly" md = "12" alignItems = "center" spacing = "8">
	  	
	 
	  {this.items.map(function(item){
	if(item.type == 'Service'){
	  	return(
			<Grid item md = "3" direction = "column">
				
			<Card className={classes.root} style = {style.CardColor2}>
      <CardHeader
        /*avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }*/
        action={
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        }
        title={item.name}
        subheader={item.type}
      />
      <CardMedia
        className={classes.media}
        image={item.imgURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Last Date of Delivery: {item.lastDate}
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
      
    </Card></Grid>
			
		)
  }
		else{
			
			return(
				<Grid item md = "3" direction = "column">
				
			<Card className={classes.root} style = {style.CardColor}>
      <CardHeader
        /*avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }*/
        action={
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        }
        title={item.name}
        subheader={item.type}
      />
      <CardMedia
        className={classes.media}
        image={item.imgURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Last Date of Delivery: {item.lastDate}
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
      
    </Card></Grid>
			)
			
		}

		
  	})}
	  </Grid> </div>
	  </Fragment>

  );}}
  
  export default BuyCatalog;
