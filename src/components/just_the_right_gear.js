import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

const JustTheRightGear = () => {

	const styles = {
      paperContainer: {
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("https://deeplakesound.fra1.digitaloceanspaces.com/images/gearshot.jpg")`,
      backgroundPosition: 'top right',
      minHeight: `1600px`,
      margin: "0px 10px 0px 10px",
      color: 'black'
      },

      h1Style: {
      	padding: "10px 10px 0px 0px",
      	margin: "0px 40px 0px 60px",
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

      layer: {
	    backgroundColor: 'rgba(248, 247, 247, 0.6)',
	    position: 'absolute',
	    minHeight: '1600px',
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
				<li>Eve SC3070 Monitors, Yamaha NS 10s</li>
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
				<li>UA 6176 </li>
				<li>Vintech x73i (2)</li>
				<li>Grace Design m201 mk2 (2 channels)</li>
				<li>DAK II mk2 (2 channels)</li>
				<li>Dbx 760x (2 channels)</li>
				<li>API 512c</li>
				<li>Silver Bullet (2 channels)</li>
				<li>SSL SiX</li>
				<li>Audio Design Pacifica (2 channels)</li>
				<li>UAD (x8) Unison Pres (4 channels)</li>
				<li>UAD 6176</li>
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
				<li>DIYRE EQP5</li>
				<li>Shadow Hills Vandergraph (2 channels)</li>
				<li>Elysia XFilter (stereo)</li>
				<li>Audioscape EQP-A (2)</li>
				<li>UA 6176 Compressor></li>
				<li>UA LA-610 Compressor></li>
				<li>SSL SiX - SSL Buss Comp (2)</li>
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
				<li>UAD Sphere DLX (vintage mic emulator)</li>
				<li>Neumann - km 184 (2)</li>
				<li>Neumann - U87 AI</li>
				<li>Neumann - TLM 102</li>
				<li>Audio Technica - 4050</li>
				<li>Audio Technica - 2035 - MicParts Mod</li>
				<li>Stam SA87</li>
				<li>Warbler MKID</li>
				<li>AKG 414 BULS</li>
				<li>BeyerDynamic m88 TG</li>
				<li>BeyerDynamic TG 201</li>
				<li>Sennheiser 421</li>
				<li>Royer R121 Ribbon</li>
				<li>Royer R10 Ribbons (2)</li>
				<li>Audix D2</li>
				<li>Audix D4</li>
				<li>Sennheiser 609</li>
				<li>Shure SM 57 (3)</li>
				<li>Soyuz 1973<li>
				<li>Mic Parts S12</li>
				<li>Studio Projects C1 (Mic Parts Mod)</li>
				<li>Litte Gems (2)</li>
				<li>Rode N-1a (for testing preamps and talkback)</li>
			</ul>
			</div>
			)
	}

	const instruments = () => {
		return (
			<div style={styles.gearBlock}>
  			<Typography variant="h5" component="h1" gutterBottom>
				<h5>Instruments</h5>
			</Typography>
			<ul>
				<li>Stuff</li>
				<li>BYOI!</li>
			</ul>
			</div>
			)
	}

	return (
		<Paper elevation={1} style={styles.paperContainer}>
		<div style={styles.layer}>
		<h1 style={styles.h1Style}><Button style={styles.bigButton} variant="outlined" component={Link}
          to={"/"}>Deep Lake Sound Studio</Button></h1>
        <h2 style={styles.h2Style}>
          Just the right gear...
        </h2>
		{core()}
		{preamps()}
		{effects()}
		{mics()}
		{instruments()}
		</div>
		</Paper>
		);
}

export default JustTheRightGear;