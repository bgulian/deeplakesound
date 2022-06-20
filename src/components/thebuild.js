import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import itemData from './imagelist'


const TheBuild = () => {

const styles = {
      paperContainer: {
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${Image}) `,
      backgroundPosition: 'center',
      minHeight: `1300px`,
      margin: "0px 5px 0px 5px",
      color: 'black'
      },

      h1Style: {
      	padding: "10px 10px 0px 0px",
      	margin: "0px 40px 0px 5px",
      	color: "black"
      },
      h2Style: {
      	padding: "10px 10px 10px 10px",
      	margin: "0px 40px 0px 65px",
      	color: "blue"
      },
      gearBlock: {
      	padding: "10px 10px 10px 10px",
      	margin: "0px 40px 0px 70px"
      },

      bigButton: {
      	fontSize: "32px",
      	color: "#4351b7",
      	textTransform: 'none',
      	paddingBottom: '15px',
        margin: "0px 0px 0px 0px"
      },

      layer: {
	    backgroundColor: 'rgba(248, 247, 247, 0.6)',
	    position: 'absolute',
	    minHeight: '1300px',
	    top: '0',
	    left: '0',
	    width: '100%',
	    height: '100%'
		}

  	};
	

return (
	<Paper elevation={1} style={styles.paperContainer}>
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="text" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button> </h1>
	<ImageList sx={{ width: 1300 }} cols={3} rowHeight={784}>
  {itemData.map((item,ndx) => (
    <ImageListItem key={`${item.img}${ndx}`}>?
      <img 
        src={`${item.img}`}
       
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.title}
        subtitle={item.desc}
        position="below"
         />
    </ImageListItem>
  ))}
	</ImageList>
	</Paper>
	);
}

export default TheBuild;