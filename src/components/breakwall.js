import React  from 'react';
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import Paper from '@mui/material/Paper';
import LowVolumeAudioPlayer from './lowVolumeAudioPlayer';
import { Link } from 'react-router-dom';

const Breakwall = () => {
	const styles = {
    //40px 0px 40px
      paperContainer: {
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url("https://deeplakesound.fra1.digitaloceanspaces.com/images/CoolGlasses.jpg")`,
          minHeight: `1200px`,
          margin: "0px 40px 0px 40px"
      	},
      h1Style: {
      	padding: "10px 10px 10px 10px",
      	//color: "white"
      },
      h2Style: {
      	padding: "20px 10px 10px 10px",
      	margin: "10px 40px 0px 20px",
      	color: "black",
        wordWrap: "normal",
        maxWidth: "400px"
      },
      figureStyle: {
        margin: "10px 5px 0px 20px",
        color: "white",
        padding: "10px 10px 10px 10px",
      },

      linkStyle: {
        outline: "none",
        textDecoration: "none",
        fontSize: "1.2rem",
        padding: "2px 1px 0",
        color: "#5279CD",
        margin: "0px 40px 0px 20px",
      },
    

      bigButton: {
      	fontSize: "32px",
      	color: "#4351b7",
      	textTransform: 'none'
      }
 	 };


return (
    <Paper elevation={1} style={styles.paperContainer}>
    <h3 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound</Button></h3>
        <h4 style={styles.h2Style}>
          Breakwall - Bob Gulian - coming January, 2026
        </h4>
         <figure style={styles.figureStyle}>
            <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/BreakwallBetter.jpg" width="300px" height="300px" />
         </figure>
        <figure style={styles.figureStyle}>
          <figcaption>Canada - Bob Gulian</figcaption>
          <LowVolumeAudioPlayer src="https://deeplakesound.fra1.digitaloceanspaces.com/audio/Canada-PTMix.wav" initialVolume={0.3} />
        </figure>
        <figure style={styles.figureStyle}>
          <figcaption>Bang Fortune - Bob Gulian</figcaption>
          <LowVolumeAudioPlayer src="https://deeplakesound.fra1.digitaloceanspaces.com/audio/Bang%20Fortune.wav" initialVolume={0.3} />
        </figure>
         <figure style={styles.figureStyle}>
         <figcaption style={styles.figureStyle}>33 1/3 Album - <strong>33 1/3</strong> - Bob Gulian:</figcaption>
       <a style={styles.linkStyle} href="https://open.spotify.com/album/7wNjFCFfd45qewLA9VI8Z">33 1/3</a>
        </figure>
        </Paper>
    );
}

export default Breakwall;

