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
import ContactStuff from './contact';
import Image from '../images/notmessybig.jpg';

const LandingPage = (props) => {
  const [contact, setContact] = useState(false)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${Image}) `,
    backgroundPosition: "center",
    minHeight: `1200px`,
    textAlign: 'center',
    color: '#4351b7'
  }));

  const styles = {
      paperContainer: {
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${Image}) `,
          minHeight: `1200px`,
          margin: "auto",
          textAlign:"center"
      },
       h1Style: {
        padding: "10px 10px 10px 10px",
        color: "#4351b7"
      },
      content : {
        maxWidth: "1000px",
        margin:"auto"
      },
      mitemBlock: {
        padding: "10px 10px 10px 10px",
        margin: "0px 40px 0px 70px",
        color: 'white'
      }
  };
  return (
   <Grid container direction="column" item xs={12} align="center">
    <Grid item xs={1}>
    <Item >
  	<Typography variant="h3" component="h1" gutterBottom>

  		<h2 style={styles.h1Style}>Deep Lake Sound Studio</h2>
      
        <MenuItem
          component={Link}
          to={"./just_the_right_gear"}
          style={styles.mitemBlock}
        >Just The Right Gear</MenuItem>
        <MenuItem
          component={Link}
          to={"./samples"}
           style={styles.mitemBlock}
        >Samples</MenuItem>
        <MenuItem
          component={Link}
          to={"./thebuild"}
           style={styles.mitemBlock}
        >The Build</MenuItem>
        <MenuItem
           onClick={(e) => {e.preventDefault(); setContact(!contact)}}
           style={styles.mitemBlock}
        >Contact</MenuItem>
        {contact &&
         <Grid item xs={5}>
        <ContactStuff />
        </Grid> }
      </Typography>
     </Item>
    
    
     </Grid>
    
     </Grid>
  	
  	
  	)
}

export default LandingPage;