import React,{ useState } from "react";
import  '../eightst_styles.css';
import NavBar from './navbar.jsx';
import { Link } from 'react-router-dom';

const Services = () => {

return (
 <div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
		
      <NavBar />
		
       <h2 className="mb-2 text-2xl font-semibold text-[#b16429] md:text-2xl">
        Services
      </h2>
      <div>
        <img 
        src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/SnowLight.jpg"
        alt="Snow Light"
        className="h-75 w-full object-cover rounded-lg shadow-lg md:min-h-128"
        />
      </div>
      <div className="mb-6 space-y-6 text-sm font-normal text-[#eef0f6] lg:text-xl">
      <p class="break-after-auto py-10"> We offer a variety of services to meet your audio needs and are dedicated to providing high-quality recording, mixing, and mastering services for music, voiceovers, and more. Our state-of-the-art studio is equipped with the newest and oldest (vintage) and equipment to get that 'big iron' sound. Besides recording, mixing, and mastering music of all genres we have experience in Audio Book Recording and Publishing, Voiceover Services and Podcast creation and publishing</p>
    </div>
    <div className="space-y-6">
      <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/tomtomcaddy.jpg" alt="Tom Tom Caddy" className="h-full max-h-152 min-h-72 w-full object-cover"/>
    </div>  
     
    <section className="px-6 py-20 md:px-10 md:py-15">
    <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
      
     <div className="space-y-6 mb-6 text-sm font-normal lg:text-xl">
      <h3 className="mb-2 text-2xl font-semibold text-[#c89735] md:text-2xl"><p>Music Production</p></h3>
      <ul className="list-none pl-6 text-[#f5f5f7]">
        <li>Recording</li>
        <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Services/FullWelcomeRecliners.jpg" alt="Recording" className="h-full max-h-152 min-h-72 w-full object-cover"/>
        <p className="break-after-auto py-6">We provide recording services for music, voiceovers, and other audio projects. Our state-of-the-art hybrid (digital and analog)studio is equipped with the latest technology to ensure that your recordings sound their best.</p>
        <li>Mixing</li>
        <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Keyvboards-ProtoolsDLS.jpeg" alt="Mixing" className="h-full max-h-152 min-h-72 w-full object-cover"/>
        <p className="break-after-auto py-6">Our mixing services help you glue your project together. Specializing in creating balanced and polished mixes of Deep Lake Sound recordings or your own project recorded elsewhere</p>
        <li>Mastering</li>
        <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Services/mastering.jpg" alt="Mastering" className="h-full max-h-152 min-h-72 w-full object-cover"/>
        <p className="break-after-auto py-6">We offer professional mastering services. We'll turn it up and make it sound like a record!</p>
      </ul>
   </div>
   </div>
    </section>
    <section className="px-6 py-20 md:px-10 md:py-15">
    <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
      
     <div className="space-y-6 mb-6 text-sm font-normal lg:text-xl">
     <h3 className="mb-2 text-2xl font-semibold text-[#c89735] md:text-2xl"><p>Voice and Spoken Word</p></h3>
      <ul className="list-none pl-6 text-[#f5f5f7]">
        <li>Audio Book Recording and Publishing</li>
        <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Services/%20RobinGWG.jpg" alt="Audio Book" className="h-full max-h-152 min-h-72 w-full object-cover"/>
        <p className="break-after-auto py-6">We can record you or a voice actor reading your book. Then we can add music and sound processing and finally, submit the finished product to Audible or other spoken word stores.</p>
        <li>Voiceover Services</li>
        <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Services/headphones.jpg" alt="Voice Over" className="h-full max-h-152 min-h-72 w-full object-cover"/>
        <p className="break-after-auto py-6">We'll record and synchronize voiceover services for commercials, video games, and other projects. Pre-production, recording, and some post-production are included in our services.</p>
        <li>Podcast Creation and Publishing</li>
        <img src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/Services/headphones.jpg" alt="Podcast" className="h-full max-h-152 min-h-72 w-full object-cover"/>
        <p className="break-after-auto py-6">Let's talk about your podcasting needs!</p>
      </ul>
    </div>
    </div>
    </section>
  </div>
  )
}

export default Services;