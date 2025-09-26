// card.tsx (aún más genérico)
interface CardProps {
  title?: string;
  titleSize?: string;
  className?: string;
  children: React.ReactNode;
}

export function Card({
  title,
  titleSize = "text-3xl",
  className = "",
  children
}: CardProps) {

  return (
    <section className={`py-8 ${className}`}>
      {title && (
        <h2 className={`font-bold text-center mb-8 ${titleSize}`}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}