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

const About = () => {
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

	return (
		<Paper elevation={1} style={styles.paperContainer}>
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button></h1>
        <h2 style={styles.h2Style}>
          About Us
        </h2>
        <p style={styles.pStyle}>Great Records can be recorded like <a href="https://www.1854.photography/wp-content/uploads/2016/04/Image-2-Landy.jpg">this</a>  and <a href="https://www.skiddle.com/news/all/Throwback-Thursday-Radiohead-OK-Computer-/27043/">this</a></p>
        <p style={styles.pStyle}>With that in mind, Deep Lake Sound has no control room, no board and no Studio B. It is, instead, one well tuned live room with an engineer and some great equipment.</p>
        <Box
          component="img"
          sx={{
            height: 800,
            width: 600,
           
          }}
          alt="Session."
          src="/images/Session.jpg?auto=format&w=350&dpr=2"
        />
        <p style={styles.pStyle}>It'a all vibe</p>
        <Box
          component="img"
          sx={{
            height: 800,
            width: 600,
           
          }}
          alt="Summer at Deep Lake Sound."
          src="/images/StudioSummer.jpg?auto=format&w=350&dpr=2"
        />
    </Paper>
    );
}

export default About;