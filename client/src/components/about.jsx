import React from 'react';
import '../eightst_styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@base-ui/react/button';
import { aboutData, morePics } from './aboutUsImageList';
import Navbar from './navbar.jsx';

const About = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [currMessage, setCurrMessage] = React.useState('');

  React.useEffect(() => {
    if (!open) return undefined;

    const timer = window.setTimeout(() => setOpen(false), 4000);
    return () => window.clearTimeout(timer);
  }, [open]);

  const infoHandler = (desc) => {
    setCurrMessage(desc || 'No details available.');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
		
     <Navbar />
      <h2 className="px-3 py-2 text-blue">About Us</h2>

      <p className="px-3 py-2">
        Great Records can be recorded like{' '}
        <a href="https://www.1854.photography/wp-content/uploads/2016/04/Image-2-Landy.jpg" target="_blank" rel="noreferrer">
          this
        </a>{' '}
        and{' '}
        <a href="https://www.skiddle.com/news/all/Throwback-Thursday-Radiohead-OK-Computer-/27043/" target="_blank" rel="noreferrer">
          this
        </a>
      </p>

      <p className="px-3 py-2">
        Deeplake Sound is currently an invitation-only music and voice-over studio for our friends.
        Please call for friendship opportunities :) In the winter, when all the leaves are off the
        trees, you can see the deep lake from the studio.
      </p>

      <div className="px-3 pb-6">
        <div className="mb-4 text-lg font-medium text-slate-700">Its about vibe and flexibility</div>

        <div className="grid w-full gap-[30px] sm:grid-cols-2 xl:grid-cols-3">
          {aboutData.map((tile) => (
            <div key={tile.img} className="group relative overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-slate-200">
              <img
                src={tile.img}
                alt={tile.title}
                className="h-[300px] w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/50 to-transparent px-3 py-2">
                <span className="text-sm font-medium text-white">{tile.title}</span>

                <button
                  type="button"
                  aria-label={`info about ${tile.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                  onClick={() => infoHandler(tile.desc)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-6">
        <div className="mb-4 text-lg font-medium text-slate-700">More pics...</div>

        <div className="grid w-full gap-[30px] sm:grid-cols-2 xl:grid-cols-3">
          {morePics.map((tile) => (
            <div key={tile.img} className="group relative overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-slate-200">
              <img
                src={tile.img}
                alt={tile.title}
                className="h-[300px] w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/50 to-transparent px-3 py-2">
                <span className="text-sm font-medium text-white">{tile.title}</span>

                <button
                  type="button"
                  aria-label={`info about ${tile.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                  onClick={() => infoHandler(tile.desc)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="status"
          aria-live="polite"
          className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-3 rounded-md bg-slate-900 px-4 py-3 text-sm text-white shadow-lg"
        >
          <span>{currMessage}</span>
          <Button
            type="button"
            className="inline-flex items-center justify-center rounded border border-white/30 bg-transparent px-2 py-1 text-xs font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default About;