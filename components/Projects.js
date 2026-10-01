'use client';
import { useRef, useState } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  const [open, setOpen] = useState(-1);
  const tip = useRef(null);

  const move = (e) => {
    const t = tip.current, p = e.target.closest('.proj');
    t.style.left = e.clientX + 'px';
    t.style.top = e.clientY - 34 + 'px';
    t.classList.add('on');
    t.textContent = p && p.dataset.open === 'true' ? 'Close' : 'Open';
  };

  return (
    <>
      <div id="tip" ref={tip}>Open</div>
      <div id="list" onPointerMove={move} onPointerLeave={() => tip.current.classList.remove('on')}>
        {projects.map((p, i) => (
          <article key={p.title} className="proj" data-open={open === i}>
            <button aria-expanded={open === i}
              onClick={() => { tip.current.textContent = open === i ? 'Open' : 'Close'; setOpen(open === i ? -1 : i); }}>
              <h3>{p.title}</h3>
              <span className="stack">{p.stack}</span>
              <span className="plus" />
            </button>
            <div className="body"><div>
              <p>{p.text}</p>
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ))}
            </div></div>
          </article>
        ))}
      </div>
    </>
  );
}
