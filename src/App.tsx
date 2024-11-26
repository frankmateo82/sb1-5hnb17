import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { VideoBackground } from './components/VideoBackground';
import { HeroContent } from './components/HeroContent';
import { VideoIntro } from './components/VideoIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleIntroComplete = () => {
    setFadeOut(true);
    setTimeout(() => setShowIntro(false), 1000);
  };

  return (
    <>
      {showIntro && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <VideoIntro onIntroComplete={handleIntroComplete} />
        </div>
      )}
      
      <main className={`relative min-h-screen bg-black text-white overflow-hidden transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative h-screen">
          <VideoBackground />
          <div className="relative h-full">
            <Navigation />
            <HeroContent />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;