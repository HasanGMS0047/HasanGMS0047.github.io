import Link from "next/link";
import { projects, sides, site } from "@/lib/data";
import { RevealRoot } from "@/components/reveal-root";
import { ProjectList } from "@/components/project-list";

// Home: who he is, the three sides of the site as three large doors, then a few projects.
// The only D&D on this page is the idea of a multiclass character, said once.

export default function Home() {
  return (
    <main id="main">
      <RevealRoot />

      <section className="hero">
        <div className="wrap">
          <div className="hero__intro rise">
            <p className="label">{site.name} · Dhaka</p>
            <p className="hero__lead">
              I&apos;m a third-year computer science student at United International University. I learn by building things, I write for fun, and I play
              a lot of RPGs. In D&amp;D terms I&apos;m a multiclass character, so this site has three sides.
            </p>
          </div>

          <h1 className="sr-only">Mohammad Mahadi Hasan: learner, writer, gamer</h1>
          <ul className="sides">
            {sides.map((s, i) => (
              <li key={s.href} className="rise" style={{ ["--d" as string]: `${180 + i * 130}ms` }}>
                <Link className="side" href={s.href}>
                  <span className="side__num">{s.numeral}</span>
                  <span className="side__name">{s.name}</span>
                  <span className="side__line">{s.line}</span>
                  <span className="side__go" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="work-h">
        <div className="wrap">
          <header className="section__head" data-reveal="">
            <p className="label">Selected work</p>
            <h2 id="work-h">
              Built while <em>learning.</em>
            </h2>
          </header>
          <ProjectList items={projects.slice(0, 3)} />
          <p className="more" data-reveal="">
            <Link className="link" href="/learner">
              All {projects.length} projects, and what I&apos;m studying now{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </p>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-h">
        <div className="wrap" data-reveal="">
          <h2 id="closing-h">
            Have an internship, a project or a question? <em>Say hello.</em>
          </h2>
          <div className="closing__row">
            <Link className="btn" href="/about#contact">
              Send a message
            </Link>
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
