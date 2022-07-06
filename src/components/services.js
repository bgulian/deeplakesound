import { useState } from "react";
import  '../eightst_styles.css';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactStuff from './contact';


<Paper elevation={1} style={styles.paperContainer}>
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button></h1>
        <h2 style={styles.h2Style}>
        Services
         </h2>
        <p style={styles.pStyle}>Besides recording music of all genres we also offer Audio Book Recording and Publishing, Voiceover Services, and some Video services</p>
</Paper>