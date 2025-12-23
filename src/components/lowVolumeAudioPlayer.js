import React, { useRef, useEffect } from 'react';

const LowVolumeAudioPlayer = ({ src, initialVolume = 0.2 }) => {
  // Create a ref to access the audio DOM element
  const audioRef = useRef(null);

  useEffect(() => {
    // Ensure the ref is attached to an element and the volume is valid
    if (audioRef.current && initialVolume >= 0 && initialVolume <= 1) {
      audioRef.current.volume = initialVolume;
    }
  }, [initialVolume]); // Re-run if initialVolume prop changes

  return (
    <div>
      <audio ref={audioRef} controls src={src}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default LowVolumeAudioPlayer;