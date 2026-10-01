'use client';
import { useEffect, useRef } from 'react';

const NAME = 'Apoorv';

export default function Hero() {
  const hero = useRef(null);
  const nameEl = useRef(null);
  const letters = useRef([]);

  useEffect(() => {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const react = (px, py) => letters.current.forEach((s) => {
      if (!s) return;
      const r = s.getBoundingClientRect();
      const f = Math.max(0, 1 - Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2)) / 300);
      s.style.fontVariationSettings = `"wght" ${Math.round(200 + f * 600)},"wdth" ${Math.round(75 + f * 25)}`;
      s.style.transform = `translateY(${-f * 16}px)`;
      s.style.color = f > 0.45 ? 'var(--rose)' : '';
    });
    const rest = () => letters.current.forEach((s) => {
      if (!s) return;
      s.style.fontVariationSettings = '"wght" 200,"wdth" 75';
      s.style.transform = 'translateY(0)';
      s.style.color = '';
    });
    const h = hero.current;
    let run = !still, raf, timer;
    const move = (e) => { run = false; if (!still) react(e.clientX, e.clientY); };
    h.addEventListener('pointermove', move);
    h.addEventListener('pointerleave', rest);
    if (!still) {
      timer = setTimeout(() => {
        const r = nameEl.current.getBoundingClientRect();
        const t0 = performance.now(), y = r.top + r.height / 2;
        const step = (n) => {
          if (!run) return;
          const p = (n - t0) / 1700;
          if (p >= 1) { rest(); return; }
          react(r.left + p * r.width, y);
          raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      }, 1300);
    }
    return () => {
      h.removeEventListener('pointermove', move);
      h.removeEventListener('pointerleave', rest);
      clearTimeout(timer); cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="hero" ref={hero}>
      <div className="wrap">
        <p className="hi">Hi, I'm</p>
        <h1 ref={nameEl} aria-label={NAME}>
          {NAME.split('').map((c, i) => (
            <div className="mask" key={i}>
              <span ref={(el) => (letters.current[i] = el)} style={{ animationDelay: `${0.2 + i * 0.09}s` }}>{c}</span>
            </div>
          ))}
        </h1>
        <p className="role">I build <em>full-stack apps</em>, AI tools and the infrastructure that keeps them running.</p>
        <div className="btns">
          <a className="btn p" href="#work">See my work</a>
          <a className="btn" href="https://github.com/apoorv1jha" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=jha77apurva@gmail.com&su=Hello%20Apoorv" target="_blank" rel="noopener noreferrer">Email me</a>
        </div>
      </div>
    </header>
  );
}
