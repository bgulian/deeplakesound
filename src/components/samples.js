import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Samples = () => {
	const styles = {
      paperContainer: {
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url("https://deeplakesound.fra1.digitaloceanspaces.com/images/thedeeplakefog.jpg")`,
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
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button></h1>
        <h2 style={styles.h2Style}>
          Audio Samples
        </h2>
        <figure style={styles.figureStyle}>
          <figcaption>Cold Case - new album by Bob Gulian with the Recliners:</figcaption>
         <a style={styles.linkStyle} href="https://deeplakesound.com/coldcase">
          <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/coldcasecover1600.jpg" width="400px" height="400px" />
          </a>
        </figure>
        <figure>
         <figcaption style={styles.figureStyle}>Latest Album - 33 1/3 - Bob Gulian:</figcaption>
        <a style={styles.linkStyle} href="https://open.spotify.com/album/7wNjFCFfd45qewLA9VI8ZM">33 1/3</a>
        </figure>
        </Paper>
		);
}

export default Samples;