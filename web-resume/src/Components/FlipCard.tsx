import React from 'react';

interface FlipCardProps {
  title: string;
  date: string;
  description?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, date, description }) => {
  return (
    <div className="flip-card h-32 relative">
      <div className="flip-inner w-full h-full relative">

        {/* Front */}
        <div className="flip-front bg-pink-50 text-pink-700 dark:bg-pink-900 dark:text-pink-200 shadow-sm px-3 py-2 text-sm font-medium hover:bg-pink-100 dark:hover:bg-pink-800 transition-all duration-300 flex flex-col justify-center items-start">
          <div className="text-xs font-semibold text-pink-500">{date}</div>
          <div className="text-sm font-bold text-slate-800 dark:text-pink-100">{title}</div>
        </div>

        {/* Back */}
        <div className="flip-back bg-white text-pink-600 dark:bg-white dark:text-pink-400 shadow-md text-xs font-medium p-2 flex items-center justify-center text-center rounded-xl">
          {description || 'Tap for details'}
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
