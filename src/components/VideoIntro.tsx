import React, { useState } from 'react';
import YouTube from 'react-youtube';

interface VideoIntroProps {
  onIntroComplete: () => void;
}

export function VideoIntro({ onIntroComplete }: VideoIntroProps) {
  const [isReady, setIsReady] = useState(false);
  const videoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID;

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      mute: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      start: 0,
      end: 6
    }
  };

  const handleReady = (event: { target: any }) => {
    setIsReady(true);
    event.target.seekTo(0);
    event.target.playVideo();
  };

  const handleStateChange = (event: { target: any; data: number }) => {
    if (event.data === 0) {
      onIntroComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50">
      <div className={`w-full h-full transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={handleReady}
          onStateChange={handleStateChange}
          className="w-screen h-screen"
          iframeClassName="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}