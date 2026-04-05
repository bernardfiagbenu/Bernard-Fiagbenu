import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export default function AnimatedCard({ title, description, icon: Icon, href, delay = 0 }: AnimatedCardProps) {
  return (
    <Link href={href} className="group block perspective-container" style={{ animationDelay: `${delay}ms` }}>
      <Card className="h-full flex flex-col bg-card hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:border-accent animate-fade-in-up opacity-0 dashboard-3d rounded-[2.5rem] p-4">
        <CardHeader className="flex-row items-center gap-4 pb-2">
          <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
          <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {description}
          </CardDescription>
        </CardContent>
        <div className="p-6 pt-0 flex justify-end">
          <ArrowRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}
