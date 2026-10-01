'use client';
import { useEffect, useRef } from 'react';

export default function ScrollBar() {
  const bar = useRef(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      bar.current.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return <div id="bar" ref={bar} />;
}
