"use client";

import { useCallback, useEffect, useState, useRef } from "react";

type Props = { slides: { src: string; alt: string }[] };

export default function ArticleCarousel({ slides }: Props) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const go = useCallback(
    (i: number) => {
      setIdx(Math.max(0, Math.min(slides.length - 1, i)));
    },
    [slides.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(idx - 1);
      if (e.key === "ArrowRight") go(idx + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, go]);

  function onTouchStart(e: React.TouchEvent) {
    startXRef.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - startXRef.current;
    if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1));
  }

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {slides.map((s, i) => (
          <div key={i} className="carousel-slide" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" disabled={idx === 0} onClick={() => go(idx - 1)} aria-label="Previous slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button className="carousel-btn next" disabled={idx === slides.length - 1} onClick={() => go(idx + 1)} aria-label="Next slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === idx ? "active" : ""}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <p className="mono text-xs text-black/40 text-center mt-4 tracking-widest">
        SWIPE OR USE ARROWS · {idx + 1} OF {slides.length}
      </p>
    </div>
  );
}
