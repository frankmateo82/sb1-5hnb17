import React, { useState } from 'react';
import YouTube from 'react-youtube';

export function VideoBackground() {
  const [isReady, setIsReady] = useState(false);
  const videoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID;

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      loop: 1,
      modestbranding: 1,
      mute: 1,
      playlist: videoId,
      playsinline: 1,
      rel: 0,
      showinfo: 0
    }
  };

  const handleReady = (event: { target: any }) => {
    setIsReady(true);
    event.target.playVideo();
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10" />
      <div className={`transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-full h-screen scale-150">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={handleReady}
            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2"
            iframeClassName="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      {!isReady && <div className="absolute inset-0 bg-black z-0" />}
    </div>
  );
}