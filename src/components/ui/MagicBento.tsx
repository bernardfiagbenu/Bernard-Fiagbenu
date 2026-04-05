'use client';

/**
 * MagicBento Component
 * A highly interactive bento grid with spotlight effects, 
 * 3D tilt, magnetism, and border glow.
 */

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface BentoCardData {
  title: string;
  description: string;
  label?: string;
  icon?: LucideIcon;
  href: string;
  className?: string;
}

export interface BentoProps {
  cards: BentoCardData[];
  textAutoHide?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  className?: string;
}

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '255, 255, 255'; // White
const MOBILE_BREAKPOINT = 768;

function InteractiveCard({
  children,
  className = '',
  disableAnimations = false,
  style,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}: {
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseLeave = () => {
      magnetismAnimationRef.current?.kill();
      gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;
        magnetismAnimationRef.current = gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3, ease: 'power2.out' });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(${glowColor}, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
      `;
      element.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 50, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
    };
  }, [disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
}

export function MagicBento({
  cards,
  textAutoHide = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  className = ''
}: BentoProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldDisableAnimations = disableAnimations || isMobile;

  useEffect(() => {
    if (!enableSpotlight || shouldDisableAnimations) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.bento-card-wrapper');
      
      cards.forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        (card as HTMLElement).style.setProperty('--spotlight-radius', `${spotlightRadius}px`);
        (card as HTMLElement).style.setProperty('--glow-color', `rgba(${glowColor}, 0.15)`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableSpotlight, shouldDisableAnimations, spotlightRadius, glowColor]);

  return (
    <div className={cn("w-full h-full flex items-center justify-center p-4 sm:p-8", className)}>
      <style jsx global>{`
        .bento-grid {
          display: grid;
          gap: 1.5rem;
          width: 100%;
          max-width: 1100px;
          grid-template-columns: repeat(1, 1fr);
        }
        
        @media (min-width: 640px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 220px);
          }
          .bento-card-wrapper.card-0 { grid-column: span 2; grid-row: span 1; }
          .bento-card-wrapper.card-1 { grid-column: span 1; grid-row: span 1; }
          .bento-card-wrapper.card-2 { grid-column: span 1; grid-row: span 2; }
          .bento-card-wrapper.card-3 { grid-column: span 1; grid-row: span 1; }
          .bento-card-wrapper.card-4 { grid-column: span 2; grid-row: span 1; }
          .bento-card-wrapper.card-5 { grid-column: span 1; grid-row: span 1; }
        }

        .bento-card-wrapper {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .dark .bento-card-wrapper {
          background: hsl(var(--card) / 0.5);
        }

        .bento-card-wrapper:hover {
          border-color: rgba(${glowColor}, 0.3);
          background: hsl(var(--card));
        }

        .spotlight-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            var(--spotlight-radius) circle at var(--mouse-x) var(--mouse-y),
            var(--glow-color),
            transparent 80%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .bento-card-wrapper:hover .spotlight-overlay {
          opacity: 1;
        }

        .border-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          padding: 1px;
          background: radial-gradient(
            var(--spotlight-radius) circle at var(--mouse-x) var(--mouse-y),
            rgba(${glowColor}, 0.8),
            transparent 40%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .bento-card-wrapper:hover .border-glow {
          opacity: 1;
        }
      `}</style>
      
      <div ref={gridRef} className="bento-grid">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const Content = (
            <Link 
              href={card.href}
              className="h-full w-full p-6 flex flex-col justify-between group cursor-pointer shine"
            >
              <div className="spotlight-overlay" />
              {enableBorderGlow && <div className="border-glow" />}
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-primary uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    {card.label || 'Explore'}
                  </span>
                  {Icon && <Icon className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />}
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-2">
                  {card.title}
                </h3>
              </div>
              
              <div className="relative z-10">
                <p className={cn(
                  "text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors",
                  textAutoHide && "line-clamp-2"
                )}>
                  {card.description}
                </p>
              </div>
            </Link>
          );

          return (
            <InteractiveCard
              key={index}
              className={cn(`bento-card-wrapper card-${index}`, card.className)}
              glowColor={glowColor}
              enableTilt={enableTilt}
              enableMagnetism={enableMagnetism}
              clickEffect={clickEffect}
              disableAnimations={shouldDisableAnimations}
            >
              {Content}
            </InteractiveCard>
          );
        })}
      </div>
    </div>
  );
};

export default MagicBento;
