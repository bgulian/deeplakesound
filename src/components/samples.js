import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from '../images/nightlights.jpg';
import { Link } from 'react-router-dom';

const Samples = () => {
	const styles = {
      paperContainer: {
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${Image}) `,
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
    

      bigButton: {
      	fontSize: "32px",
      	color: "#4351b7",
      	textTransform: 'none'
      }
 	 };

	return (
		<Paper elevation={1} style={styles.paperContainer}>
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button></h1>
        <h2 style={styles.h2Style}>
          Audio Samples
        </h2>
        
         <figure style={styles.figureStyle}>
          <figcaption>Two To Fly (HD)- Bob Gulian:</figcaption>
          <audio
              controls
              src="https://deeplakesound.fra1.digitaloceanspaces.com/TwoToFly-Master%20-%20MAIN.wav">
                  Your browser does not support the
                  <code>audio</code> element.
          </audio>
        </figure>
        </Paper>
		);
}

export default Samples;