import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {List,ListItem,ListItemText} from '@mui/material/List';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from '../images/gearshot.jpg';

const JustTheRightGear = () => {

	const styles = {
      paperContainer: {
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${Image}) `,
      minHeight: `1300px`,
      margin: "0px 40px 0px 40px",
      color: 'black'
      },

      h1Style: {
      	padding: "10px 10px 0px 0px",
      	margin: "0px 40px 0px 60px",
      	color: "black"
      },
      gearBlock: {
      	padding: "10px 10px 10px 10px",
      	margin: "0px 40px 0px 70px"
      },

      bigButton: {
      	fontSize: "32px",
      	color: "#4351b7",
      	textTransform: 'none',
      	paddingBottom: '15px'
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
	const core = () => {
		return (
			<div style={styles.gearBlock}>
  			<Typography variant="h5" component="h1" gutterBottom>
				<h5>Core 24 Tracks:</h5>
			</Typography>
			<ul>
				<li>Mac Studio - M1 Max</li>
				<li>Universal Audio x16</li>
				<li>Universal Audio x8</li>
			</ul>
			</div>
			)
	}
	const preamps = () => {
		return (
			<div style={styles.gearBlock}>
  			<Typography variant="h5" component="h1" gutterBottom>
				<h5>Preamps:</h5>
			</Typography>
			<ul>
				<li>RND 511 (2)</li>
				<li>RND 517 </li>
				<li>Vintech x73i (2)</li>
				<li>Grace Design m201 mk2 (2 channels)</li>
				<li>DAK II mk2 (2 channels)</li>
				<li>Dbx 760x (2 channels)</li>
				<li>API 512c</li>
				<li>Silver Bullet (2 channels)</li>
				<li>UAD (x8) Unison Pres (4 channels)</li>
			</ul>
			</div>
		)
	}

	const effects = () => {
		return (
			<div style={styles.gearBlock}>
  			<Typography variant="h5" component="h1" gutterBottom>
				<h5>Effects</h5>
			</Typography>
			<ul>
				<li>Dbx 560a (Revive Modified) (2)</li>
				<li>Art Pro VLA II (stereo)</li>
				<li>LTLO Silver Bullet Tone Shaper (2 channels)</li>
				<li>Tree Audio LG 2a</li>
				<li>DIYRE CP5A</li>
				<li>Shadow Hills Vandergraph (2 channels)</li>
				<li>Really Nice Compressor (2 channels)</li>
				<li>Elysia XFilter (stereo)</li>
				<li>2 Klark Teknik EQP 1a's that don't do anything great but have nice amber lights</li>
			</ul>
			</div>
			)
	}
	const mics = () => {
		return (
			<div style={styles.gearBlock}>
  			<Typography variant="h5" component="h1" gutterBottom>
				<h5>Microphones</h5>
			</Typography>
			<ul>
				<li>Neumann - km 184 (2)</li>
				<li>Neumann - U87 AI</li>
				<li>Neumann - TLM 102</li>
				<li>Audio Technica - 4050</li>
				<li>Audio Technica - 2035 - MicParts Mod</li>
				<li>Stam SA87</li>
				<li>Warbler MKID</li>
				<li>AKG 414 BULS</li>
				<li>BeyerDynamic TG 201</li>
				<li>Sennheiser 421</li>
				<li>Royer R10 Ribbons (2)</li>
				<li>Audix D2</li>
				<li>Audix D4</li>
				<li>Shure SM 57 (3)</li>
				<li>Mic Parts S12</li>
				<li>Litte Gems (2)</li>
			</ul>
			</div>
			)
	}

	return (
		<Paper elevation={1} style={styles.paperContainer}>
		<div style={styles.layer}>
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="text" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button> </h1>
        <h2 style={styles.h1Style}>
          Just the right gear...
        </h2>
		{core()}
		{preamps()}
		{effects()}
		{mics()}
		</div>
		</Paper>
		);
}

export default JustTheRightGear;