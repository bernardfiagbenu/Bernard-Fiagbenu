
import type p5 from 'p5';

/**
 * Defines a p5.js sketch for an interactive particle background.
 * Particles float around and connect to nearby particles and the user's mouse.
 * Adapts to light and dark themes.
 * @param p - The p5 instance.
 */
export const homePageSketch = (p: p5) => {
  let particles: Particle[] = [];
  const particleCount = () => Math.floor((p.width * p.height) / 15000);
  let isDarkMode = false;
  let particleColor: p5.Color;
  let lineColor: p5.Color;

  // Function to set colors based on the current theme
  const setThemeColors = () => {
    isDarkMode = window.document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      particleColor = p.color(255, 255, 255, 200); // White particles
      lineColor = p.color(255, 255, 255);       // White lines
    } else {
      particleColor = p.color(0, 0, 0, 200);     // Black particles
      lineColor = p.color(0, 0, 0);           // Black lines
    }
  };

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;

    constructor() {
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.size = p.random(1, 3);
      this.speedX = p.random(-0.5, 0.5);
      this.speedY = p.random(-0.5, 0.5);
    }

    update() {
      if (this.x > p.width || this.x < 0) this.speedX *= -1;
      if (this.y > p.height || this.y < 0) this.speedY *= -1;
      this.x += this.speedX;
      this.y += this.speedY;
    }

    draw() {
      p.noStroke();
      p.fill(particleColor);
      p.circle(this.x, this.y, this.size);
    }
  }

  const createParticles = () => {
    particles = [];
    for (let i = 0; i < particleCount(); i++) {
      particles.push(new Particle());
    }
  };

  const connectParticles = () => {
    for (let i = 0; i < particles.length; i++) {
      // Connect to other particles
      for (let j = i + 1; j < particles.length; j++) {
        const distance = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        if (distance < 120) {
          const opacity = p.map(distance, 0, 120, 0.8, 0);
          lineColor.setAlpha(opacity * 255);
          p.stroke(lineColor);
          p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        }
      }
      
      // Connect to mouse
      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
        const mouseDistance = p.dist(particles[i].x, particles[i].y, p.mouseX, p.mouseY);
        if (mouseDistance < 200) {
          const opacity = p.map(mouseDistance, 0, 200, 0.6, 0);
          lineColor.setAlpha(opacity * 255);
          p.stroke(lineColor);
          p.line(particles[i].x, particles[i].y, p.mouseX, p.mouseY);
        }
      }
    }
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    setThemeColors();
    createParticles();

    // Use a MutationObserver to watch for theme changes on the <html> element
    const observer = new MutationObserver((mutationsList) => {
      for(const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setThemeColors();
        }
      }
    });

    observer.observe(window.document.documentElement, { attributes: true });
  };

  p.draw = () => {
    p.clear(); // Use clear() instead of background() for a transparent canvas
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    connectParticles();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    createParticles();
  };
};
