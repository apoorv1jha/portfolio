'use client';
import { useEffect, useRef, useState } from 'react';

const ITEMS = [['about', 'About'], ['work', 'Work'], ['skills', 'Skills'], ['contact', 'Contact']];

export default function Navbar() {
  const nav = useRef(null);
  const ind = useRef(null);
  const els = useRef([]);
  const activeRef = useRef(-1);
  const [active, setActive] = useState(-1);
  const [solid, setSolid] = useState(false);
  const [hide, setHide] = useState(false);

  const place = (i) => {
    const a = els.current[i], el = ind.current;
    if (!a) { el.style.opacity = 0; return; }
    el.style.opacity = 1;
    el.style.width = a.offsetWidth + 'px';
    el.style.transform = `translateX(${a.offsetLeft}px)`;
  };

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 20);
      if (Math.abs(y - last) > 6) {
        setHide(y > last && y > 160 && !nav.current.contains(document.activeElement));
        last = y;
      }
      let cur = -1;
      ITEMS.forEach(([id], i) => {
        const s = document.getElementById(id);
        if (s && s.getBoundingClientRect().top < window.innerHeight * 0.45) cur = i;
      });
      if (cur !== activeRef.current) { activeRef.current = cur; setActive(cur); place(cur); }
    };
    const onResize = () => place(activeRef.current);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <nav ref={nav} className={`${solid ? 'solid' : ''} ${hide ? 'hide' : ''}`}>
      <div className="wrap">
        <b>Apoorv</b>
        <div className="links" onPointerLeave={() => place(activeRef.current)}>
          {ITEMS.map(([id, label], i) => (
            <a key={id} href={`#${id}`} ref={(el) => (els.current[i] = el)}
               className={active === i ? 'on' : ''}
               onPointerEnter={() => place(i)} onFocus={() => place(i)}>
              {label}
            </a>
          ))}
          <i className="ind" ref={ind} />
        </div>
      </div>
    </nav>
  );
}
