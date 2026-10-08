import React  from 'react';
import  '../eightst_styles.css';
import LowVolumeAudioPlayer from './lowVolumeAudioPlayer';
import { Link } from 'react-router-dom';
import NavBar from './navbar.jsx';

const Breakwall = () => {
	
return (
    <div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
		<NavBar />  
    <div className="space-y-6 mb-6 text-sm font-normal lg:text-xl">
        <figure>
         <figcaption>Breakwall - Bob Gulian 2026</figcaption>
        <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/26xbqwFIAdnhYbVm1wqCG1?utm_source=generator&si=b5a5d6e50f6a4c47" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </figure>
        <figure>
         <figcaption>Coldcase - Bob Gulian 2025</figcaption>
        <iframe data-testid="embed-iframe" style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/album/7HuTfghhYDx48IHNDUZo5L?utm_source=generator&si=acb116a8115e4c84" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </figure>
         <figure>
         <figcaption>33 1/3 Album - Bob Gulian 2023</figcaption>
          <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }}  src="https://open.spotify.com/embed/album/7wNjFCFfd45qewLA9VI8ZM?utm_source=generator&si=06e9bb3c78594df1" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </figure>
       </div> 
    </div>
    );
}

export default Breakwall;

