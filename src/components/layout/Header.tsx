
'use client';
import Link from 'next/link';
import { CodeXml, LogIn, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '../ui/button';
import { useUser } from '@/context/UserContext';
import { UserNav } from '@/components/layout/UserNav';
import HeaderNav from './HeaderNav';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/research', label: 'Research' },
  { href: '/ai', label: 'A.I.' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { user } = useUser();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="bg-background/80 text-foreground shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline hover:text-primary transition-colors">
          <CodeXml className="w-8 h-8 text-primary" />
          <div>
            <span className="font-bold text-foreground">Bernard Fiagbenu</span>
            <p className="text-xs text-muted-foreground font-body">Computer Science</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 sm:space-x-4 font-body">
          <HeaderNav />
          <div className="flex items-center gap-2">
            {user ? (
              <UserNav />
            ) : (
              <Link href="/auth">
                <Button variant="outline" size="sm">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
          </div>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Main Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-lg rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t pt-4">
                  {user ? (
                    <UserNav />
                  ) : (
                    <Link href="/auth" onClick={() => setIsSheetOpen(false)}>
                      <Button variant="outline" className="w-full">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
