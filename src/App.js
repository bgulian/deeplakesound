import logo from './logo.svg';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import LandingPage from './components/landing_page';
import JustTheRightGear from './components/just_the_right_gear';
import Samples from './components/samples';
import TheBuild from './components/thebuild';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.biglakesound.com/">
        www.biglakesound.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <Router>
       <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/just_the_right_gear" element={ <JustTheRightGear />} />
          <Route path="/samples" element={ <Samples />} />
          <Route path="/thebuild" element={ <TheBuild />} />
        </Routes>
      </div>
    </Router>
    
  );
}



export default App;
