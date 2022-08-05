import React from "react";
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import itemData from './imagelist'



export default function TheBuildTwo() {
  const [open, setOpen] = React.useState(false);
  const [currMessage, setCurrMessage] = React.useState("");
  const [currPos, setCurPos] = React.useState({vertical:'top',horizontal:'center'});

  const styles = {
      paperContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      backgroundColor: "white"
      },

      imageListItem: {
        height: 'auto' 
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
        textTransform: 'none'
      },
      gridList: {
        width: "1000",
        height: "1000",
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
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
    <div style={styles.paperContainer}>
      <h1 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button></h1>
      <ImageList cellHeight={300}  spacing={30} style={styles.gridList}>
        <ImageListItem key="Subheader" cols={2} style={styles.imageListItem}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {itemData.map((tile) => (
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
      <Snackbar
        anchorOrigin={{...currPos}}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={currMessage}
        action={action}
      />
    </div>
  );
}