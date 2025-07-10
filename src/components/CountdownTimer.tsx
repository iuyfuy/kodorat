
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 48 hours from now
    const targetDate = new Date().getTime() + (48 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-500 to-yellow-600 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-black">
          <p className="text-lg md:text-xl font-semibold text-center md:text-left">
            Your chance to book the course at a special price ends in:
          </p>
          <div className="flex gap-2 md:gap-4">
            <div className="bg-black text-amber-400 px-3 py-2 rounded-lg text-center min-w-[60px]">
              <div className="text-xl md:text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs uppercase tracking-wide">Days</div>
            </div>
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
  );
};

export default CountdownTimer;
