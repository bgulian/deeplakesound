import React  from 'react';
import { Button } from '@base-ui/react/button';
import  '../eightst_styles.css';
import NavBar from './navbar.jsx';

import { Link } from 'react-router-dom';


const JustTheRightGear = () => {

	const core = () => {
		return (
			<div className="gearBlock p-4 md:p-6">
  			
				<h5 className="border-purple-200 text-blue-600">Core 24 Tracks:</h5>
	
			<ul>
				<li>Mac Studio - M4 Max runnin Pro Tools 2026.4.1, Luna Studio</li>
				<li>Universal Audio x16</li>
				<li>Universal Audio x8</li>
				<li>Universal Audio Volt 476 (mobile)</li>
				<li>Eve SC3070 Monitors, Yamaha NS 10s</li>
			</ul>
			</div>
			)
	}
	const preamps = () => {
		return (
			<div className="gearBlock p-4 md:p-6">
  			
				<h5 className="border-purple-200 text-blue-600">Preamps:</h5>
			
			<ul>
				<li>RND 511 (2)</li>
				<li>RND 517 </li>
				<li>UA 6176 </li>
				<li>UA LA-610 </li>
				<li>Vintech x73i (2)</li>
				<li>Grace Design m201 mk2 (2 channels)</li>
				<li>DAK II mk2 (2 channels)</li>
				<li>API 512c</li>
				<li>CAPI 312 (2)</li>
				<li>BAE 73MPL</li>
				<li>Neve 1073LB</li>
				<li>SSL SiX (2 channels)</li>
				<li>Audio Design Pacifica (2 channels)</li>
				<li>UAD (x8) Unison Pres (4 channels)</li>
			</ul>
			</div>
		)
	}

	const effects = () => {
		return (
			<div className="gearBlock p-4 md:p-6">
  			
				<h5 className="border-purple-200 text-blue-600">Effects</h5>
		
			<ul>
				<li>Dbx 560a (Revive Modified) (2)</li>
				<li>Art Pro VLA II (stereo)</li>
				<li>Tree Audio LG 2a</li>
				<li>DIYRE EQP5</li>
				<li>Shadow Hills Vandergraph (2 channels)</li>
				<li>AudioScape 4000 E Bus Compressor</li>
				<li>Elysia XFilter (stereo)</li>
				<li>Audioscape EQP-A (2)</li>
				<li>Audioscape Opto Comp</li>
				<li>Audioscape 76D Comp (2)</li>
				<li>Harrison Comp (2)</li>
				<li>RND 551 EQ</li>
				<li>SSL 611-EQ (3)</li>
				<li>UA 6176 Compressor</li>
				<li>UA LA-610 Compressor</li>
				<li>SSL SiX - SSL Buss Comp (2)</li>
				<li>Drawmer 1973 - Multiband Compressor</li>
			</ul>
			</div>
			)
	}
	const mics = () => {
		return (
			<div className="gearBlock p-4 md:p-6">
				<h5 className="border-purple-200 text-blue-600">Microphones</h5>
			<ul>
				<li>UAD Sphere DLX (vintage mic emulator)</li>
				<li>Neumann - km 184 (2)</li>
				<li>Neumann - U87 AI</li>
				<li>Neumann - TLM 102</li>
				<li>Audio Technica - 4050</li>
				<li>Audio Technica - 2035 - MicParts Mod</li>
				<li>Stam SA87 (2)</li>
				<li>Stam SA47 FET</li>
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
				<li>Soyuz 1973</li>
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
			<div className="gearBlock p-4 md:p-6">
  			
				<h5 className="border-purple-200 text-blue-600">Instruments</h5>
		
			<ul>
				<li>Stuff (Kawaii, Fender, Washburn, Yamaha, Gretsch, Ampeg, DW Drums)</li>
			</ul>
			</div>
			)
	}

	const gearImage = (alt,imageURL) => (
		<img
			className="h-56 w-full rounded-lg object-cover shadow-lg  md:min-h-64"
			src={imageURL}
			alt={alt}
		/>
	);

	const gearRow = (content, imageAlt, imageURL) => (
		<div className="grid grid-cols-1 items-start gap-6 border-t border-white/20 py-6 md:grid-cols-[7fr_3fr] md:items-stretch">
			{content}
			{gearImage(imageAlt, imageURL)}
		</div>
	);

	return (
		<div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
		
			<NavBar />
		<div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-2xl font-semibold text-[#9db4ff] md:text-2xl">
          Just the right gear...
        </h2>
		{gearRow(core(), 'Studio core gear', 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/EntryBW.jpg')}
		{gearRow(preamps(), 'Studio preamps', 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Gear/preamps_xlrpb.jpg')}
		{gearRow(effects(), 'Studio effects equipment', 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Gear/compressors.jpg')}
		{gearRow(mics(), 'Studio microphones', 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Drumbooth.jpg')}
		{gearRow(instruments(), 'Studio instruments', 'https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Gear/GuitarsBone.jpeg')}
		</div>
	
		</div>
		);
}

export default JustTheRightGear;