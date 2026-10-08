import React  from 'react';
import  '../eightst_styles.css';
import NavBar from './navbar.jsx';
import LowVolumeAudioPlayer from './lowVolumeAudioPlayer';
import { Link } from 'react-router-dom';

const Samples = () => {
	

	return (
  <div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
    <NavBar />
        
         <a href="./breakwall">
          <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/BreakwallBetter.jpg" width="400px" height="400px" />
          </a>
      
        <section className="px-6 py-20 md:px-10 md:py-15">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
          <div className="space-y-6 mb-6 text-sm font-normal lg:text-xl">
            <h3 className="mb-2 text-2xl font-semibold text-[#c89735] md:text-2xl"><p>Assorted Songs and Recordings</p></h3>
            <ul className="list-none pl-6 text-[#f5f5f7]">
              <li>Genius</li>
              <LowVolumeAudioPlayer src="https://deeplakesound.fra1.digitaloceanspaces.com/audio/Genius-Master_PrintTrack.03-St.wav" alt="Genius" className="h-full max-h-152 min-h-72 w-full object-cover" initialVolume={0.5}/>
              <p className="break-after-auto py-6 text-[#eef0f6]"><strong>Genius.</strong> Recorded at Deep Lake Sound in 2026.</p>
              <li>Heart of Iron</li>
              <LowVolumeAudioPlayer src="https://deeplakesound.fra1.digitaloceanspaces.com/audio/HeartOfIron_Master.wav" alt="Heart of Iron" className="h-full max-h-152 min-h-72 w-full object-cover" initialVolume={0.5}  />
              <p className="break-after-auto py-6 text-[#eef0f6]"><strong>Heart of Iron.</strong> Recorded live by The Recliners at Deep Lake Sound in 2026.</p>
              <li>Emma Lee Brown - Bob Gulian</li>
              <LowVolumeAudioPlayer src="https://deeplakesound.fra1.digitaloceanspaces.com/audio/EmmaLeeBrown%20-%20Master_PrintTrack.02-St.wav" alt="Emma Lee Brown" className="h-full max-h-152 min-h-72 w-full object-cover" initialVolume={0.5} />
              <p className="break-after-auto py-6 text-[#eef0f6]"><strong>Emma Lee Brown</strong>- Bob Gulian. Recorded at Deep Lake Sound in 2026.</p>
              <li>More Than I Believe - Bob Gulian</li>
              <LowVolumeAudioPlayer src="https://deeplakesound.fra1.digitaloceanspaces.com/audio/MoreThanIBelieved-Master-Heh_PrintTrack.01-St.wav" alt="More Than I Believe" className="h-full max-h-152 min-h-72 w-full object-cover" initialVolume={0.5} />
              <p className="break-after-auto py-6 text-[#eef0f6]"><strong>More Than I Believe</strong> - Bob Gulian. Recorded at Deep Lake Sound in 2026.</p>
            </ul>
          </div>
        </div>
      </section> 
  </div>
    );
}


export default Samples;