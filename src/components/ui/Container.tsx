import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

/** Largura máxima e margens laterais padrão do site. Usar dentro de todas as secções. */
export function Container({ className, children }: ContainerProps) {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}
