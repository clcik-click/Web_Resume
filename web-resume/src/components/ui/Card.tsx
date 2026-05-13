interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export default function Card({ title, description, imageSrc, href }: CardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-slate-200 rounded-lg bg-white hover:shadow-2xs focus:outline-hidden dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative flex items-center overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
        />

        <div className="grow p-4 ms-32 sm:ms-48">
          <div className="min-h-24 flex flex-col justify-center">
            <h3 className="font-semibold text-sm text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
