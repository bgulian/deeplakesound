import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import JustTheRightGear from './just_the_right_gear';
import Image from '../images/notmessybig.jpg';

const LandingPage = (props) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const styles = {
      paperContainer: {
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${Image}) `,
          minHeight: `1200px`,
          margin: "0px 40px 0px 40px"
      },
       h1Style: {
        padding: "10px 10px 10px 10px",
        color: "#4351b7"
      },
  };
  return (
    <Paper style={styles.paperContainer}>
  	<Typography variant="h3" component="h1" gutterBottom>
  		<h2 style={styles.h1Style}>Deep Lake Sound Studio</h2>
        <MenuItem
          component={Link}
          to={"./just_the_right_gear"}
        >Just The Right Gear</MenuItem>
        <MenuItem
          component={Link}
          to={"./samples"}
        >Samples</MenuItem>
        <MenuItem
          component={Link}
          to={"./thebuild"}
        >The Build</MenuItem>
        <MenuItem
          component={Link}
          to={"./contact"}
        >Contact</MenuItem>
      </Typography>
     </Paper>
  	
  	
  	)
}

export default LandingPage;