/* ============================================================
   3D SPECTRUM MESH BACKGROUND (Futuristic / Premium)
   Highly optimized canvas animation
   ============================================================ */

class SpectrumMesh {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        
        // Settings
        this.fov = 300;
        this.gridSize = 25; // Space between points
        this.cols = 40;
        this.rows = 40;
        this.speed = 1.2;
        this.heightMapMultiplier = 60;
        
        this.time = 0;
        this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
        this.width = 0;
        this.height = 0;
        this.cx = 0;
        this.cy = 0;
        
        this.init();
        this.bindEvents();
        this.animate();
    }
    
    init() {
        this.resize();
    }
    
    resize() {
        // High DPI Support
        const dpr = window.devicePixelRatio || 1;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        this.cx = this.width / 2;
        this.cy = this.height / 2 + 100; // Move center down a bit
    }
    
    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            // Normalized mouse position -1 to 1
            this.mouse.targetX = (e.clientX / this.width) * 2 - 1;
            this.mouse.targetY = (e.clientY / this.height) * 2 - 1;
        });
        
        // Touch support for mobile
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.targetX = (e.touches[0].clientX / this.width) * 2 - 1;
                this.mouse.targetY = (e.touches[0].clientY / this.height) * 2 - 1;
            }
        });
    }
    
    project(x, y, z) {
        const scale = this.fov / (this.fov + z);
        return {
            x: this.cx + x * scale,
            y: this.cy + y * scale,
            scale: scale
        };
    }
    
    // Smooth noise function
    getNoise(x, z, t) {
        // Combines multiple sine waves for organic terrain
        const n1 = Math.sin(x * 0.05 + t) * Math.cos(z * 0.05 + t);
        const n2 = Math.sin(x * 0.1 - t * 0.5) * Math.cos(z * 0.1 + t * 0.8);
        return (n1 + n2 * 0.5) * this.heightMapMultiplier;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        this.time += 0.015 * this.speed;
        
        // Smooth mouse interpolation (easing)
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;
        
        // Theme color parsing
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        // Base color: Lila/Purple
        const baseColor = isDark ? [139, 92, 246] : [109, 40, 217]; // #8B5CF6 / #6D28D9
        
        // We will generate the grid points
        const points = [];
        
        const startX = -this.cols * this.gridSize / 2;
        const startZ = 0;
        
        // Dynamic camera offset based on mouse
        const camX = this.mouse.x * 200;
        const camY = 150 + this.mouse.y * 50; 
        
        for (let z = 0; z < this.rows; z++) {
            const zRow = [];
            for (let x = 0; x < this.cols; x++) {
                const worldX = startX + x * this.gridSize;
                const worldZ = startZ + z * this.gridSize;
                
                // Calculate moving effect by offsetting the noise sample coordinates
                const sampleZ = worldZ - (this.time * 100); 
                
                // Height based on noise
                const worldY = this.getNoise(worldX, sampleZ, this.time);
                
                // Transform to camera space
                const tx = worldX - camX;
                const ty = worldY + camY;
                const tz = worldZ;
                
                // Project to 2D screen
                const proj = this.project(tx, ty, tz);
                
                zRow.push({
                    sx: proj.x,
                    sy: proj.y,
                    z: tz
                });
            }
            points.push(zRow);
        }
        
        // Draw the mesh
        this.ctx.lineWidth = 1.5;
        
        for (let z = 0; z < this.rows - 1; z++) {
            for (let x = 0; x < this.cols - 1; x++) {
                const p = points[z][x];
                const right = points[z][x + 1];
                const bottom = points[z + 1][x];
                
                // Calculate depth-based opacity (fade out in the distance)
                const maxZ = this.rows * this.gridSize;
                const alpha = Math.max(0, 1 - (p.z / maxZ));
                // Add a glowing trail effect based on mouse distance
                
                // Draw horizontal line
                this.ctx.beginPath();
                this.ctx.moveTo(p.sx, p.sy);
                this.ctx.lineTo(right.sx, right.sy);
                this.ctx.strokeStyle = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${alpha * 0.4})`;
                this.ctx.stroke();
                
                // Draw vertical line
                this.ctx.beginPath();
                this.ctx.moveTo(p.sx, p.sy);
                this.ctx.lineTo(bottom.sx, bottom.sy);
                this.ctx.strokeStyle = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${alpha * 0.4})`;
                this.ctx.stroke();
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SpectrumMesh('particles-canvas');
});
