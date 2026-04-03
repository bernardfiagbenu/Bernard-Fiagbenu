
'use client';

import React, { useRef, useEffect } from 'react';
import type p5 from 'p5';

interface P5SketchProps {
  sketch: (p: p5) => void;
  className?: string;
}

const P5Sketch: React.FC<P5SketchProps> = ({ sketch, className }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We need to lazy-load p5 since it relies on window object
    import('p5').then(p5Module => {
      const P5 = p5Module.default;
      let instance: p5 | null = null;

      if (canvasRef.current) {
        // Ensure we don't create multiple instances
        if (canvasRef.current.childElementCount === 0) {
          instance = new P5(sketch, canvasRef.current);
        }
      }

      // Cleanup function to remove the p5 instance when the component unmounts
      return () => {
        instance?.remove();
      };
    });
  }, [sketch]);

  return <div ref={canvasRef} className={className} />;
};

export default P5Sketch;
