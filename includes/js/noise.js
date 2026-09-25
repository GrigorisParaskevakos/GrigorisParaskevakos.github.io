"use strict";

/**
 * Glowing particle swirl behind the page (simplex noise flow field).
 * Wrapped in an IIFE so its helpers don't leak into the global scope.
 */
(() => {
    // Visitors who asked for less motion get the still picture
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const {
        PI,
        cos,
        sin,
        abs,
        random
    } = Math;
    const TAU = 2 * PI;
    const rand = n => n * random();
    const randIn = (min, max) => rand(max - min) + min;
    const fadeInOut = (t, m) => {
        let hm = 0.5 * m;
        return abs((t + hm) % m - hm) / (hm);
    };
    const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

    const particleCount = 1000;
    const spawnRadius = 100;
    const noiseSteps = 6;

    let canvas;
    let ctx;
    let center;
    let tick;
    let simplex;
    let positions;
    let velocities;
    let lifeSpans;
    let sizes;
    let hues;
    let speeds;

    function setup() {
        tick = 0;
        center = [];
        createCanvas();
        createParticles();
        draw();
    }

    function createParticles() {
        simplex = new SimplexNoise();
        positions = new Float32Array(particleCount * 2);
        velocities = new Float32Array(particleCount * 2);
        lifeSpans = new Float32Array(particleCount * 2);
        speeds = new Float32Array(particleCount);
        hues = new Float32Array(particleCount);
        sizes = new Float32Array(particleCount);

        let i;

        for (i = 0; i < particleCount * 2; i += 2) {
            initParticle(i);
        }
    }

    function initParticle(i) {
        let iy, ih, rd, rt, cx, sy, x, y, s, rv, vx, vy, h, si, l, ttl;

        iy = i + 1;
        ih = 0.5 * i | 0;
        rd = rand(spawnRadius);
        rt = rand(TAU);
        cx = cos(rt);
        sy = sin(rt);
        x = center[0] + cx * rd;
        y = center[1] + sy * rd;
        rv = randIn(0.1, 1);
        s = randIn(1, 8);
        vx = rv * cx * 0.1;
        vy = rv * sy * 0.1;
        si = randIn(0.1, 1);
        h = randIn(160, 260);
        l = 0;
        ttl = randIn(50, 200);

        positions[i] = x;
        positions[iy] = y;
        velocities[i] = vx;
        velocities[iy] = vy;
        hues[ih] = h;
        sizes[ih] = si;
        speeds[ih] = s;
        lifeSpans[i] = l;
        lifeSpans[iy] = ttl;
    }

    function drawParticle(i) {
        let iy, ih, x, y, n, tx, ty, s, vx, vy, h, si, l, dl, ttl;

        iy = i + 1;
        ih = 0.5 * i | 0;
        x = positions[i];
        y = positions[iy];
        n = simplex.noise3D(x * 0.0025, y * 0.0025, tick * 0.0005) * TAU;
        vx = lerp(velocities[i], cos(n * noiseSteps), 0.05);
        vy = lerp(velocities[iy], sin(n * noiseSteps), 0.05);
        s = speeds[ih];
        tx = x + vx * s;
        ty = y + vy * s;
        h = hues[ih];
        si = sizes[ih];
        l = lifeSpans[i];
        ttl = lifeSpans[iy];
        dl = fadeInOut(l, ttl);

        l++;

        // every particle sets its own width/colour, so no save()/restore() needed
        ctx.a.lineWidth = dl * si + 1;
        ctx.a.strokeStyle = `hsla(${h},50%,60%,${dl})`;
        ctx.a.beginPath();
        ctx.a.moveTo(x, y);
        ctx.a.lineTo(tx, ty);
        ctx.a.stroke();

        positions[i] = tx;
        positions[iy] = ty;
        velocities[i] = vx;
        velocities[iy] = vy;
        lifeSpans[i] = l;

        (checkBounds(x, y) || l > ttl) && initParticle(i);
    }

    function checkBounds(x, y) {
        return (
            x > canvas.a.width ||
            x < 0 ||
            y > canvas.a.height ||
            y < 0
        );
    }

    function createCanvas() {
        canvas = {
            a: document.createElement("canvas"),
            b: document.createElement("canvas")
        };
        canvas.b.className = "particles"; // positioned in style.css
        canvas.b.setAttribute("aria-hidden", "true");
        document.body.appendChild(canvas.b);
        ctx = {
            a: canvas.a.getContext("2d"),
            b: canvas.b.getContext("2d")
        };
        resize();
    }

    function resize() {
        const {
            innerWidth,
            innerHeight
        } = window;

        canvas.a.width = canvas.b.width = innerWidth;
        canvas.a.height = canvas.b.height = innerHeight;
        center[0] = 0.5 * innerWidth;
        center[1] = 0.5 * innerHeight;
    }

    function draw() {
        tick++;
        ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);

        ctx.b.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);

        let i;

        for (i = 0; i < particleCount * 2; i += 2) {
            drawParticle(i);
        }

        ctx.b.save();
        ctx.b.filter = 'blur(8px)';
        ctx.b.globalCompositeOperation = 'lighten';
        ctx.b.drawImage(canvas.a, 0, 0);
        ctx.b.restore();

        ctx.b.save();
        ctx.b.globalCompositeOperation = 'lighter';
        ctx.b.drawImage(canvas.a, 0, 0);
        ctx.b.restore();

        window.requestAnimationFrame(draw);
    }

    window.addEventListener("load", setup);
    window.addEventListener("resize", () => canvas && resize());
})();
