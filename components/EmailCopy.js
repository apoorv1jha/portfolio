'use client';
import { useRef } from 'react';

const EMAIL = 'jha77apurva@gmail.com';

export default function EmailCopy() {
  const toast = useRef(null);
  const show = () => {
    const t = toast.current;
    t.textContent = `Email copied: ${EMAIL}`;
    t.classList.add('on');
    setTimeout(() => t.classList.remove('on'), 2200);
  };
  const copy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const i = document.createElement('textarea');
      i.value = EMAIL; i.style.position = 'fixed'; i.style.opacity = 0;
      document.body.appendChild(i); i.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(i);
    }
    show();
  };
  return (
    <>
      <a className="big mail" href={`mailto:${EMAIL}`} onClick={copy}>{EMAIL}</a>
      <div id="toast" ref={toast} role="status" />
    </>
  );
}
