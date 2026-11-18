"use client";

import { useEffect, useState } from "react";

/*
 * The hero clip is ~9MB, so the element is only mounted where it will actually
 * be seen: wide enough viewports, and not when the visitor asks for reduced
 * motion. Hiding it with CSS would still download the file. Until (or unless)
 * it mounts, the hero background (the clip's first frame, also the poster)
 * carries the section, so there's no visible swap when playback starts.
 */
export default function HeroVideo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 681px) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setShow(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  if (!show) return null;

  return (
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/hero-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/hero-background.mp4" type="video/mp4" />
    </video>
  );
}
