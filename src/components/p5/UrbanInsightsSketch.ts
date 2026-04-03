
import type p5 from 'p5';

/**
 * Defines a p5.js sketch for an interactive urban skyline banner.
 * Features a shifting gradient background, a pulsing skyline, floating particles,
 * and interactivity on hover and click events.
 * @param p - The p5 instance.
 */
export const urbanInsightsSketch = (p: p5) => {
  let particles: Particle[] = [];
  const buildings: Building[] = [];
  let bgColor1: p5.Color, bgColor2: p5.Color;
  let textAlpha = 0;
  const particleCount = 50;

  class Particle {
    pos: p5.Vector;
    vel: p5.Vector;
    acc: p5.Vector;
    maxSpeed = 2;
    size = p.random(1, 3);
    color: p5.Color;

    constructor() {
      this.pos = p.createVector(p.random(p.width), p.random(p.height));
      this.vel = (p.constructor as typeof p5).Vector.random2D();
      this.acc = p.createVector();
      this.color = p.color(255, 255, 255, p.random(150, 200));
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.edges();
    }

    applyForce(force: p5.Vector) {
      this.acc.add(force);
    }

    edges() {
      if (this.pos.x > p.width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = p.width;
      if (this.pos.y > p.height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = p.height;
    }

    draw() {
      p.noStroke();
      p.fill(this.color);
      p.circle(this.pos.x, this.pos.y, this.size);
    }
  }

  class Building {
    x: number;
    w: number;
    baseH: number;
    currentH: number;
    pulseOffset: number;

    constructor(x: number, w: number, h: number) {
      this.x = x;
      this.w = w;
      this.baseH = h;
      this.currentH = h;
      this.pulseOffset = p.random(0, 1000);
    }

    draw() {
      const pulse = p.sin((p.millis() / 2000) + this.pulseOffset);
      this.currentH = this.baseH + pulse * 10;
      
      const distanceToMouse = p.abs(this.x + this.w / 2 - p.mouseX);
      let hoverGlow = 0;
      if (distanceToMouse < 100) {
        hoverGlow = p.map(distanceToMouse, 0, 100, 50, 0);
      }
      
      p.fill(20, 20, 30, 200 + hoverGlow);
      p.noStroke();
      p.rect(this.x, p.height - this.currentH, this.w, this.currentH);
    }
  }
  
  const setupScene = () => {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    buildings.length = 0;
    let x = 0;
    while(x < p.width) {
        const w = p.random(20, 80);
        const h = p.random(p.height * 0.1, p.height * 0.5);
        buildings.push(new Building(x, w, h));
        x += w;
    }
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, 250); // Fixed height for banner
    p.pixelDensity(1);
    
    // Gradient colors that shift
    bgColor1 = p.color('#0f2027');
    bgColor2 = p.color('#203a43');

    setupScene();
  };

  p.draw = () => {
    // Shifting gradient background
    const time = p.millis() / 5000;
    const c1 = p.lerpColor(p.color('#0f2027'), p.color('#2c5364'), p.sin(time) * 0.5 + 0.5);
    const c2 = p.lerpColor(p.color('#203a43'), p.color('#203a43'), p.cos(time) * 0.5 + 0.5);
    setGradient(c1, c2);

    // Draw skyline
    buildings.forEach(b => b.draw());
    
    // Draw and update particles
    particles.forEach(pt => {
      pt.update();
      pt.draw();
    });

    // Fading text overlay
    p.fill(255, textAlpha);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(48);
    p.textFont('Space Grotesk');
    p.text('Urban Insights', p.width / 2, p.height / 2);
    if (textAlpha < 255) {
      textAlpha += 1;
    }
  };
  
  function setGradient(c1: p5.Color, c2: p5.Color) {
      p.noFill();
      for (let i = 0; i <= p.height; i++) {
        const inter = p.map(i, 0, p.height, 0, 1);
        const c = p.lerpColor(c1, c2, inter);
        p.stroke(c);
        p.line(0, i, p.width, i);
      }
  }

  p.mouseClicked = () => {
    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
        particles.forEach(pt => {
            const force = (p.constructor as typeof p5).Vector.random2D();
            force.mult(p.random(5, 10));
            pt.applyForce(force);
        });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, 250);
    setupScene();
  };
};
