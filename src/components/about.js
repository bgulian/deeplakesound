
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
        <p style={styles.pStyle}>With that in mind, Deeplake Sound has no control room, no board and no Studio B. It is, instead, one well tuned live room with an engineer and some great equipment. \
        Not to mention that in the winter, when all the leaves are off the trees, you can see the deep lake from the studio.</p>
       <Grid container item xs={12} sm={6} md={3} align="center">
          <Grid item xs={8}>

            <div><img src="/images/StudioLookingDown.jpg?auto=format&w=600&dpr=2" alt="Studio from above"/>
              </div>
              <div><p style={styles.pStyle}>It's all about vibe</p>
              </div>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={1}>
            <div><img src="/images/AmpsDrums.jpg?auto=format&w=600&dpr=2" alt="Left side of the studio"/>
              </div>
          </Grid>
        </Grid>
         <Grid container item xs={12} sm={6} md={3} align="center">
           <Grid item xs={8}>
            <div><p style={styles.pStyle}>And Flexibility</p>
              </div>
            <div><img src="/images/Racks.jpg?auto=format&w=600&dpr=2" alt="Equipment"/>
              </div>
             
          </Grid>  
       
        </Grid>
         
    </Paper>
    );
}

export default About;