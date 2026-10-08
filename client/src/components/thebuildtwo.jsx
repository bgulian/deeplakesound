import React from 'react';
import '../eightst_styles.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@base-ui/react/button';
import NavBar from './navbar.jsx';
import itemData from './imagelist';

export default function TheBuildTwo() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [currMessage, setCurrMessage] = React.useState('');

  React.useEffect(() => {
    if (!open) return undefined;

    const timer = window.setTimeout(() => setOpen(false), 4000);
    return () => window.clearTimeout(timer);
  }, [open]);

  const styles = {
    paperContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      
      backgroundColor: 'white',
    },
    h1Style: {
      padding: '10px 10px 0px 0px',
      margin: '0px 40px 0px 5px',
      color: 'black',
    },
  };

  const infoHandler = (desc) => {
    setCurrMessage(desc || 'No details available.');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <div className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
		
      <NavBar />

      <div className="grid w-full max-w-250 gap-7.5 px-4 pb-8 sm:grid-cols-2 xl:grid-cols-3">
        {itemData.map((tile) => (
          <div key={tile.img} className="group relative overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-slate-200">
            <img
              src={tile.img}
              alt={tile.title}
              className="h-75 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/80 via-black/50 to-transparent px-3 py-2">
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
}