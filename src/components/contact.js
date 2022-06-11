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
import Image from '../images/notmessybig.jpg';

const ContactStuff = (props) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    
    minHeight: `100px`,
    textAlign: 'center',
    color: 'black',
    textAlign: 'left'

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
   
    <Item >
  	<Typography variant="h5" component="p" gutterBottom>
  		<p>Email: Bob at bgulian@gmail.com</p>
      <p>Studio Tour: Call for an appt. 914-589-7484</p> 
      <a href="https://www.oswegony.org/">Oswego, NY</a>
    </Typography>
     </Item>
     
  	
  	
  	)
}

export default ContactStuff;