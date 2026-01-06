import React  from 'react';
import Typography from '@mui/material/Typography';
import LandingPage from './components/landing_page.jsx';
import JustTheRightGear from './components/just_the_right_gear.jsx';
import Samples from './components/samples.jsx';
import TheBuildTwo from './components/thebuildtwo.jsx';
import About from "./components/about.jsx";
import Breakwall from "./components/breakwall.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <Router>
       <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/just_the_right_gear" element={ <JustTheRightGear />} />
          <Route path="/samples" element={ <Samples />} />
          <Route path="/thebuildtwo" element={ <TheBuildTwo />} />
          <Route path="/about" element={ <About />} />
          <Route path="/breakwall" element={ <Breakwall />} />
        </Routes>
       
      </div>
    </Router>
   
  );
}



export default App;
