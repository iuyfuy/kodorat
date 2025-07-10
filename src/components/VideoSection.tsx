import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': any;
    }
  }
}

const VideoSection = () => {
  useEffect(() => {
    // Inject Wistia scripts dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/6gek3j89ru.js';
    script2.async = true;
    script2.type = 'module';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <style>{`
        wistia-player[media-id='6gek3j89ru']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/6gek3j89ru/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>

      {/* Wistia video player */}
      <wistia-player
        media-id="6gek3j89ru"
        aspect="1.7777777777777777"
      ></wistia-player>
    </div>
  );
};

export default VideoSection;
