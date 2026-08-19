/* ============================================================
   HOLOGRAPHIC PLEXUS BACKGROUND (Premium / Top)
   Highly optimized canvas particle network
   ============================================================ */

class HologramPlexus {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        
        this.particles = [];
        this.particleCount = 120; // Number of floating nodes
        this.connectionDistance = 140; // Max distance to draw a line
        this.mouseRadius = 150; // Interaction radius
        
        this.mouse = { x: null, y: null, isActive: false };
        this.width = 0;
        this.height = 0;
        
        this.init();
        this.bindEvents();
        this.animate();
    }
    
    init() {
        this.resize();
        this.createParticles();
    }
    
    resize() {
        // High DPI Support
        const dpr = window.devicePixelRatio || 1;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        // Adjust particle count for smaller screens to keep performance high
        if (this.width < 768) {
            this.particleCount = 50;
            this.connectionDistance = 100;
        } else {
            this.particleCount = 120;
            this.connectionDistance = 150;
        }
        
        this.createParticles();
    }
    
    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.mouse.isActive = true;
        });
        
        window.addEventListener('mouseout', () => {
            this.mouse.isActive = false;
        });
        
        // Touch support
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
                this.mouse.isActive = true;
            }
        });
        window.addEventListener('touchend', () => {
            this.mouse.isActive = false;
        });
    }
    
    createParticles() {
        this.particles = [];
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const rgb = isDark ? '139, 92, 246' : '109, 40, 217'; // Lila / Purple base
        
        for (let i = 0; i < this.particleCount; i++) {
            const size = Math.random() * 2.5 + 0.5; // Random size for depth
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: size,
                baseX: 0,
                baseY: 0,
                color: rgb,
                // Simulate 3D depth by dimming smaller particles
                opacity: size / 3
            });
        }
    }
    
    drawParticle(p) {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        this.ctx.fill();
        
        // Glow effect for larger particles
        if (p.size > 2) {
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        } else {
            this.ctx.shadowBlur = 0;
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Update and draw particles
        for (let i = 0; i < this.particleCount; i++) {
            let p = this.particles[i];
            
            // Movement
            p.x += p.vx;
            p.y += p.vy;
            
            // Bounce off edges smoothly
            if (p.x < 0 || p.x > this.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.height) p.vy *= -1;
            
            // Mouse Interaction (Holographic distortion)
            if (this.mouse.isActive) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouseRadius) {
                    // Push particles away (magnetic effect)
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (this.mouseRadius - distance) / this.mouseRadius;
                    
                    p.x -= forceDirectionX * force * 3;
                    p.y -= forceDirectionY * force * 3;
                }
            }
            
            this.drawParticle(p);
            
            // Draw connecting lines
            for (let j = i + 1; j < this.particleCount; j++) {
                let p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    // Calculate opacity based on distance
                    const opacity = 1 - (distance / this.connectionDistance);
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    // Line color blends the particles
                    this.ctx.strokeStyle = `rgba(${p.color}, ${opacity * 0.4})`;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HologramPlexus('particles-canvas');
});
