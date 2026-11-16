"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/data";

const links = [
  { href: "/learner", label: "Learner" },
  { href: "/writer", label: "Writer" },
  { href: "/gamer", label: "Gamer" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const path = usePathname();
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <Link className="brand" href="/" aria-label="Mahadi Hasan, home">
          <img src="/assets/logo-96.png" alt="" width={30} height={30} />
          <span>Mahadi Hasan</span>
        </Link>
        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link className="nav__cta" href="/about#contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

// The one playful thing on the site: a d20 in the footer. Nothing depends on the roll.
function Die() {
  const [n, setN] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    if (rolling) return;
    const result = 1 + Math.floor(Math.random() * 20);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(result);
      return;
    }
    setRolling(true);
    let i = 0;
    const iv = setInterval(() => {
      setN(1 + Math.floor(Math.random() * 20));
      if (++i > 7) {
        clearInterval(iv);
        setN(result);
        setRolling(false);
      }
    }, 70);
  };

  const said = n === null ? "Roll a d20" : rolling ? "Rolling" : n === 20 ? "Natural 20." : n === 1 ? "Natural 1. Ouch." : `You rolled ${n}.`;

  return (
    <button type="button" className={`die ${rolling ? "is-rolling" : ""}`} onClick={roll}>
      <span className="die__face" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <polygon points="50,4 92,28 92,72 50,96 8,72 8,28" />
          <path d="M50 4 L50 34 M8 28 L34 56 M92 28 L66 56 M34 56 L66 56 M34 56 L50 96 M66 56 L50 96 M50 34 L8 28 M50 34 L92 28" />
        </svg>
        <span>{n ?? 20}</span>
      </span>
      <span className="die__said" aria-live="polite">
        {said}
      </span>
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__bar">
        <p>
          © 2026 {site.name}
          <span className="footer__alias">Online as Forest47</span>
        </p>
        <ul className="footer__links">
          <li>
            <a href={site.resume} target="_blank" rel="noopener">
              Resume
            </a>
          </li>
          <li>
            <a href={site.github}>GitHub</a>
          </li>
          <li>
            <a href={site.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
          </li>
        </ul>
        <Die />
      </div>
    </footer>
  );
}
