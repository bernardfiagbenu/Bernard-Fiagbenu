'use client';

/**
 * MagicBento Component
 * A highly interactive bento grid with spotlight effects, particle stars, 
 * 3D tilt, magnetism, and border glow.
 */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
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
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  className?: string;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255'; // Purple
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();
    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const particle = createParticleElement(x, y, glowColor);
        cardRef.current.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.fromTo(particle, 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });
      }, i * 100);
      timeoutsRef.current.push(timeoutId);
    }
  }, [particleCount, glowColor]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
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

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export const MagicBento: React.FC<BentoProps> = ({
  cards,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  className = ''
}) => {
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
          border: 1px solid hsl(var(--border) / 0.2);
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
              className="h-full w-full p-6 flex flex-col justify-between group cursor-pointer"
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

          if (enableStars) {
            return (
              <ParticleCard
                key={index}
                className={cn(`bento-card-wrapper card-${index}`, card.className)}
                particleCount={particleCount}
                glowColor={glowColor}
                enableTilt={enableTilt}
                enableMagnetism={enableMagnetism}
                clickEffect={clickEffect}
                disableAnimations={shouldDisableAnimations}
              >
                {Content}
              </ParticleCard>
            );
          }

          return (
            <div key={index} className={cn(`bento-card-wrapper card-${index}`, card.className)}>
              {Content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MagicBento;
