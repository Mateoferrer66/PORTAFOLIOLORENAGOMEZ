/* ============================================================
   PARTICLES 3D ENGINE — Lorena Gómez Portfolio
   Custom particle system with interactive mouse tracking
   ============================================================ */

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.animationId = null;
        this.isRunning = false;
        
        // Configuration
        this.config = {
            particleCount: 80,
            particleMinSize: 1,
            particleMaxSize: 3,
            lineDistance: 150,
            speed: 0.4,
            colors: [
                'rgba(139, 92, 246, ',   // Violet
                'rgba(167, 139, 250, ',  // Light violet
                'rgba(192, 132, 252, ',  // Purple
                'rgba(221, 214, 254, ',  // Very light violet
                'rgba(196, 181, 253, ',  // Lavender
            ]
        };

        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.addEventListeners();
        this.isRunning = true;
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const count = Math.min(this.config.particleCount, Math.floor((this.canvas.width * this.canvas.height) / 12000));
        
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(this));
        }
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        // Reduce particles on mobile for performance
        if (window.innerWidth < 768) {
            this.config.particleCount = 35;
            this.config.lineDistance = 100;
        }
    }

    drawLines() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.config.lineDistance) {
                    const opacity = (1 - dist / this.config.lineDistance) * 0.35;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                    this.ctx.lineWidth = 0.6;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }

        // Mouse connection lines
        if (this.mouse.x !== null) {
            for (let i = 0; i < this.particles.length; i++) {
                const dx = this.particles[i].x - this.mouse.x;
                const dy = this.particles[i].y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.mouse.radius) {
                    const opacity = (1 - dist / this.mouse.radius) * 0.6;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(192, 132, 252, ${opacity})`;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        if (!this.isRunning) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.update();
            p.draw();
        });

        this.drawLines();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.isRunning = false;
        cancelAnimationFrame(this.animationId);
    }
}

class Particle {
    constructor(system) {
        this.system = system;
        this.ctx = system.ctx;
        this.canvas = system.canvas;

        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * (system.config.particleMaxSize - system.config.particleMinSize) + system.config.particleMinSize;
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * system.config.speed;
        this.speedY = (Math.random() - 0.5) * system.config.speed;
        this.color = system.config.colors[Math.floor(Math.random() * system.config.colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update() {
        // Movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Pulse effect
        this.pulsePhase += this.pulseSpeed;
        this.size = this.baseSize + Math.sin(this.pulsePhase) * 0.5;

        // Boundary wrapping
        if (this.x < -10) this.x = this.canvas.width + 10;
        if (this.x > this.canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = this.canvas.height + 10;
        if (this.y > this.canvas.height + 10) this.y = -10;

        // Mouse interaction - repel
        if (this.system.mouse.x !== null) {
            const dx = this.x - this.system.mouse.x;
            const dy = this.y - this.system.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.system.mouse.radius) {
                const force = (this.system.mouse.radius - dist) / this.system.mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x += Math.cos(angle) * force * 2;
                this.y += Math.sin(angle) * force * 2;
            }
        }
    }

    draw() {
        // Glow effect
        this.ctx.save();
        this.ctx.beginPath();
        const gradient = this.ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 4
        );
        gradient.addColorStop(0, this.color + this.opacity + ')');
        gradient.addColorStop(0.4, this.color + (this.opacity * 0.4) + ')');
        gradient.addColorStop(1, this.color + '0)');
        this.ctx.fillStyle = gradient;
        this.ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();

        // Core
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color + this.opacity + ')';
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

// Floating Blobs Background
class BlobSystem {
    constructor(container) {
        this.container = document.querySelector(container);
        if (!this.container) return;
        this.createBlobs();
    }

    createBlobs() {
        const blobConfigs = [
            { size: 400, x: '10%', y: '20%', delay: 0, color: 'rgba(139, 92, 246, 0.12)' },
            { size: 350, x: '70%', y: '10%', delay: 2, color: 'rgba(192, 132, 252, 0.10)' },
            { size: 300, x: '50%', y: '60%', delay: 4, color: 'rgba(109, 40, 217, 0.08)' },
            { size: 250, x: '20%', y: '80%', delay: 1, color: 'rgba(167, 139, 250, 0.10)' },
            { size: 280, x: '85%', y: '70%', delay: 3, color: 'rgba(139, 92, 246, 0.06)' },
        ];

        blobConfigs.forEach(config => {
            const blob = document.createElement('div');
            blob.classList.add('floating-blob');
            blob.style.cssText = `
                width: ${config.size}px;
                height: ${config.size}px;
                left: ${config.x};
                top: ${config.y};
                background: ${config.color};
                animation-delay: ${config.delay}s;
            `;
            this.container.appendChild(blob);
        });
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Only init particles if canvas exists (hero section)
    if (document.getElementById('particles-canvas')) {
        window.particleSystem = new ParticleSystem('particles-canvas');
    }
    
    // Init blob system
    new BlobSystem('.blobs-container');
});
