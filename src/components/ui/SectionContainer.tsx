import type { ReactNode } from 'react';

interface SectionContainerProps {
  title: string;
  children: ReactNode;
  subtitle?: string;
}

export default function SectionContainer({ title, children, subtitle }: SectionContainerProps) {
  return (
    <div className="py-8 animate-fadeInUp">
      <h1 className="text-4xl font-headline font-bold text-primary mb-2 text-center">{title}</h1>
      {subtitle && <p className="text-xl text-muted-foreground mb-8 text-center">{subtitle}</p>}
      <div className="mt-8 bg-card p-6 sm:p-8 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}
