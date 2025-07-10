
import React, { useState, useEffect } from 'react';

const VideoPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 26,
    minutes: 17,
    seconds: 0
  });

  useEffect(() => {
    // Check if there's a stored target time
    const storedTargetTime = localStorage.getItem('countdownTargetTime');
    let targetTime;

    if (storedTargetTime) {
      targetTime = parseInt(storedTargetTime);
    } else {
      // Calculate target time (26 hours 17 minutes from now)
      targetTime = new Date().getTime() + (26 * 60 * 60 * 1000) + (17 * 60 * 1000);
      localStorage.setItem('countdownTargetTime', targetTime.toString());
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201098749301', '_blank');
  };

  useEffect(() => {
  const script1 = document.createElement('script');
  script1.src = 'https://fast.wistia.com/player.js';
  script1.async = true;
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.src = 'https://fast.wistia.com/embed/6gek3j89ru.js';
  script2.type = 'module';
  script2.async = true;
  document.body.appendChild(script2);

  return () => {
    document.body.removeChild(script1);
    document.body.removeChild(script2);
  };
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Countdown Timer - Only Numbers */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-600 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="flex gap-2 md:gap-4">
              <div className="bg-black text-amber-400 px-3 py-2 rounded-lg text-center min-w-[60px]">
                <div className="text-xl md:text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs uppercase tracking-wide">Hours</div>
              </div>
              <div className="bg-black text-amber-400 px-3 py-2 rounded-lg text-center min-w-[60px]">
                <div className="text-xl md:text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs uppercase tracking-wide">Min</div>
              </div>
              <div className="bg-black text-amber-400 px-3 py-2 rounded-lg text-center min-w-[60px]">
                <div className="text-xl md:text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs uppercase tracking-wide">Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent" />

        <div className="relative z-10 py-16">
          {/* Video Section */}
          <div className="max-w-4xl mx-auto px-4 mb-16">
            <div className="relative">
              
                {/* Wistia Embed */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <div className="absolute top-0 left-0 w-full h-full">
                        <wistia-player
                          media-id="6gek3j89ru"
                          aspect="1.7777777777777777"
                        ></wistia-player>
                      </div>
                    </div>

              {/* Video glow effect */}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 uppercase tracking-wide"
            >
              Send a message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
