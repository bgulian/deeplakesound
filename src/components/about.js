
import React from "react";
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import {aboutData,morePics} from './aboutUsImageList';

const About = () => {
  const [open, setOpen] = React.useState(false);
  const [currMessage, setCurrMessage] = React.useState("");
	const styles = {
      paperContainer: {
          backgroundColor: '#B8E9FF',
          minHeight: `1200px`,
          margin: "0px 40px 0px 40px"
      	},
      h1Style: {
      	padding: "10px 10px 10px 10px",
      	//color: "white"
      },
      h2Style: {
      	padding: "10px 10px 10px 10px",
      	margin: "0px 40px 0px 20px",
      	color: "white"
      },
      figureStyle: {
        margin: "10px 5px 0px 20px",
        color: "white"
      },
    
      pStyle: {
        padding: "10px 10px 10px 10px"
      },
      bigButton: {
      	fontSize: "32px",
      	color: "#4351b7",
      	textTransform: 'none'
      }
 	 };

   const infoHandler = (desc) => {
    setCurrMessage(desc)
    setOpen(true)
  }

  const handleClose = () => {
     setOpen(false)
  }
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

	return (
		<Paper elevation={1} style={styles.paperContainer}>
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button></h1>
        <h2 style={styles.h2Style}>
          About Us
        </h2>
        <p style={styles.pStyle}>Great Records can be recorded like <a href="https://www.1854.photography/wp-content/uploads/2016/04/Image-2-Landy.jpg">this</a>  and <a href="https://www.skiddle.com/news/all/Throwback-Thursday-Radiohead-OK-Computer-/27043/">this</a></p>
        <p style={styles.pStyle}>With that in mind, Deeplake Sound has no control room, no board and no Studio B. It is, instead, one well tuned live room with an engineer and some great equipment. 
        Not to mention that in the winter, when all the leaves are off the trees, you can see the deep lake from the studio.</p>
        <ImageList cellHeight={300}  spacing={30} style={styles.gridList}>
        <ImageListItem key="Subheader" cols={2} style={styles.imageListItem}>
          <ListSubheader component="div">Its about vibe and flexibility</ListSubheader>
        </ImageListItem>
        {aboutData.map((tile) => (
          <ImageListItem key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <ImageListItemBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={styles.icon} onClick={(e) => infoHandler(tile.desc)}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList cellHeight={300}  spacing={30} style={styles.gridList}>
        <ImageListItem key="Subheader2" cols={2} style={styles.imageListItem}>
          <ListSubheader component="div">More pics...</ListSubheader>
        </ImageListItem>
        {morePics.map((tile) => (
          <ImageListItem key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <ImageListItemBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={styles.icon} onClick={(e) => infoHandler(tile.desc)}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
         
    </Paper>
    );
}

export default About;