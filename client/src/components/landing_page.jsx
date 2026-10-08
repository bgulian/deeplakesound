  import React from "react";
import '../eightst_styles.css';
  import Navbar from './navbar.jsx';


const LandingPage = () => {
  return (
    <div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[calc(100svh-14rem)] items-center overflow-hidden px-6 py-16 md:min-h-[calc(100svh-12rem)] md:px-10 md:py-20">
        <img
          src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/FullStudioNewCouch.jpg"
          alt="Deep Lake Sound studio"
          className="absolute inset-0 -z-9 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/55" />
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-8xl">
            Deep Lake Sound
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
          <div>
            <p className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-indigo-400">
              Deep Lake Sound
            </p>
            <h2 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Production, Mixing, Mastering
            </h2>
          </div>
          <img
            src="https://deeplakesound.fra1.digitaloceanspaces.com/images/nsite/DeskChaos.jpg"
            alt="Production desk at Deep Lake Sound"
            className="h-full max-h-152 min-h-72 w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;