import React from 'react';

type TimelineItemProps = {
  label: string;
  date: string;
  title: string;
  children?: React.ReactNode;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ label, date, title, children }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Purple label */}
      <div className="font-caveat font-medium text-2xl text-pink-500 mb-1 sm:mb-0">
        {label}
      </div>

      {/* Vertical line, Date, Title, Dot */}
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden
        before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-pink-300
        sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3
        after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-pink-600
        after:border-4 after:box-content after:border-pink-50 after:rounded-full
        sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
      >
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          {date}
        </time>
        <div className="text-xl font-bold text-slate-900">{title}</div>
      </div>

      {/* Custom content */}
      <div className="text-slate-500">{children}</div>
    </div>
  );
};

export default TimelineItem;
