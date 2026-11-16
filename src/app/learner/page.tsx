import type { Metadata } from "next";
import { learning, projects, uiu } from "@/lib/data";
import { RevealRoot } from "@/components/reveal-root";
import { ProjectList } from "@/components/project-list";

export const metadata: Metadata = {
  title: "Learner",
  description: "Projects built while learning, what I've used so far and what I'm studying now.",
  alternates: { canonical: "/learner" },
};

export default function Learner() {
  return (
    <main id="main">
      <RevealRoot />
      <header className="page__head">
        <div className="wrap">
          <p className="page__num rise">I</p>
          <h1 className="rise" style={{ ["--d" as string]: "90ms" }}>
            Learner
          </h1>
          <p className="page__lead rise" style={{ ["--d" as string]: "200ms" }}>
            {uiu.lead}
          </p>
        </div>
      </header>

      <section className="block" aria-labelledby="projects-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="projects-h">
            Projects
          </h2>
          <div>
            <p className="block__intro" data-reveal="">
              Class projects, a hackathon project and personal ones. I built each of them to learn something, so none of them are products.
            </p>
            <ProjectList items={projects} />
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="tools-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="tools-h">
            Used so far
          </h2>
          <div data-reveal="">
            <p className="block__intro">None of these are mastered. They&apos;re what I&apos;ve used in the projects above or am working on now.</p>
            <dl className="groups">
              {learning.map((g) => (
                <div key={g.group}>
                  <dt className="label">{g.group}</dt>
                  <dd>{g.items.join(", ")}</dd>
                </div>
              ))}
              <div>
                <dt className="label label--accent">Studying now</dt>
                <dd>Machine learning fundamentals</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="record-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="record-h">
            Record
          </h2>
          <ol className="record" data-reveal="">
            {uiu.rows.map((r) => (
              <li key={r.name}>
                <span>{r.name}</span>
                <span className="label">{r.value}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
