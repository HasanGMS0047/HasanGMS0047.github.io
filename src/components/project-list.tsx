import type { Project } from "@/lib/data";

const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    →
  </span>
);

// One project per row: screenshot on the left where there is a live site, the facts on the right.
export function ProjectList({ items }: { items: Project[] }) {
  return (
    <div className="projs">
      {items.map((p, i) => (
        <article className={`proj ${p.image ? "" : "proj--text"}`} key={p.id} data-reveal="">
          {p.image && (
            <a className="proj__shot" href={p.demo} aria-label={`Open the ${p.title} live site`}>
              <img
                src={`${p.image}-1600.webp`}
                srcSet={`${p.image}-m.webp 700w, ${p.image}-1600.webp 1600w`}
                sizes="(max-width: 900px) 92vw, 52vw"
                alt={p.alt}
                width={1600}
                height={1000}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </a>
          )}
          <div className="proj__body">
            <p className="label">{p.kind}</p>
            <h3>{p.title}</h3>
            <p className="proj__line">{p.line.replace(/^[^:]+:\s*/, "").replace(/^./, (c) => c.toUpperCase())}.</p>
            <p>{p.body}</p>
            {p.note && <p className="proj__note">{p.note}</p>}
            {p.reward && (
              <p className="proj__won">
                <span className="label label--accent">Won</span> {p.reward}
              </p>
            )}
            <p className="proj__stack">{p.stack.join(" · ")}</p>
            <div className="proj__links">
              {p.demo && (
                <a className="link" href={p.demo}>
                  Live site <Arrow />
                </a>
              )}
              <a className="link link--quiet" href={p.github}>
                Code on GitHub <Arrow />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
