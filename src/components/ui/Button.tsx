import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold",
  secondary:
    "border border-primary text-primary hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold",
  accent:
    "bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
