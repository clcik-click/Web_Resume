import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonLinkVariant;
}

const variants: Record<ButtonLinkVariant, string> = {
  primary: "border-pink-600 bg-pink-600 text-white hover:bg-pink-700 dark:border-pink-500 dark:bg-pink-500 dark:hover:bg-pink-400",
  secondary: "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800",
};

export default function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
