import { useState } from 'react';

interface CollapsibleSectionProps {
    title:string;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({title, children}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-l-4 border-pink-500 pl-4 space-y-2">
      <button
        onClick={() => setOpen(!open)}
        className="text-pink-500 font-semibold hover:text-pink-700"
      >
        {open ? `Hide ${title}` : `Read More: ${title}`}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-800 text-lg space-y-3">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleSection;