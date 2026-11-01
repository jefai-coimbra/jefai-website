import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variantClasses = {
  primary: "bg-jefai text-white shadow-sm hover:bg-jefai-light",
  secondary: "bg-jefai-ice text-jefai border border-jefai-ice-border hover:bg-slate-100",
} as const;

const sizeClasses = {
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5",
} as const;

/**
 * Link com aspeto de botão.
 * - "/rota" → navegação interna (next/link)
 * - "#ancora" → scroll na própria página
 * - "https://…" → abre em novo separador
 *
 * Para ações (submeter formulário, abrir menu) usar um <button>, não este componente.
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold whitespace-nowrap transition",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jefai-accent",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
