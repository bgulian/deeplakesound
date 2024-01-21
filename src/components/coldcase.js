import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const ColdCase = () => {
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
    <h3 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound</Button></h3>
        <h2 style={styles.h2Style}>
          Cold Case - Bob Gulian with the Recliners - coming February, 2024
        </h2>
         <figure style={styles.figureStyle}>
            <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/coldcasecover1600.jpg" width="300px" height="300px" />
         </figure>
        <figure style={styles.figureStyle}>
          <figcaption>There I Said It - Bob Gulian the Recliners:</figcaption>
          <audio
              controls
              src="https://deeplakesound.fra1.digitaloceanspaces.com/coldcaseaudio/There%20I%20Said%20It.wav">
                  Your browser does not support the
                  <code>audio</code> element. 
          </audio>
        </figure>
        <figure style={styles.figureStyle}>
          <figcaption>Disappeared - Bob Gulian with the Recliners:</figcaption>
          <audio
              controls
              src="https://deeplakesound.fra1.digitaloceanspaces.com/coldcaseaudio/Disappeared.wav">
                  Your browser does not support the
                  <code>audio</code> element.
          </audio>

        </figure>
         <figure style={styles.figureStyle}>
         <figcaption style={styles.figureStyle}>Last Album - <strong>33 1/3</strong> - Bob Gulian:</figcaption>
        <a style={styles.linkStyle} href="https://open.spotify.com/album/7wNjFCFfd45qewLA9VI8ZM">33 1/3</a>
        </figure>
        </Paper>
    );
}

export default ColdCase;

