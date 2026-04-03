'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedHeroHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve to trigger animation only once
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const headline = "Bernard Fiagbenu";
  const words = headline.split(" ");

  return (
    <div ref={containerRef} className="text-center mb-16 relative z-10 flex flex-col items-center">
      {/* Sliding text with clipping mask effect and fluid typography */}
      <h1 
        className="font-headline font-bold text-foreground mb-6 leading-tight flex justify-center flex-wrap gap-x-[0.3em] overflow-hidden" 
        style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block pb-2 -mb-2">
            <span
              className="inline-block"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(110%)',
                opacity: isVisible ? 1 : 0, // Fade text effect
                // Power4.out equivalent easing
                transition: `transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, opacity 1s ease ${index * 0.15}s`,
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </h1>

      <p 
        className="font-body text-muted-foreground flex flex-wrap justify-center items-center gap-x-[0.4em] max-w-3xl leading-relaxed"
        style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease 0.8s, transform 1s ease 0.8s',
        }}
      >
        <span>Computer Science Educationist &</span>
        <span className="relative inline-block font-bold text-foreground mx-1">
          Innovator
          {/* Hand-drawn SVG underline animation */}
          <svg
            className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-4 md:h-5 pointer-events-none"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M 2 15 C 30 5, 70 8, 98 12"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength="100"
              style={{
                strokeDasharray: '100',
                strokeDashoffset: isVisible ? '0' : '100',
                transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s',
              }}
            />
          </svg>
        </span>
        <span>based in Ghana, Africa.</span>
      </p>
    </div>
  );
}
