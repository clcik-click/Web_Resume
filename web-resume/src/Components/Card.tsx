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
      className="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700"
    >
      <div className="relative flex items-center overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
        />

        <div className="grow p-4 ms-32 sm:ms-48">
          <div className="min-h-24 flex flex-col justify-center">
            <h3 className="font-semibold text-sm text-black">{title}</h3>
            <p className="mt-1 text-sm text-black">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
