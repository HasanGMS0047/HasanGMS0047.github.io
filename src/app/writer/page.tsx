import type { Metadata } from "next";
import { RevealRoot } from "@/components/reveal-root";

export const metadata: Metadata = {
  title: "Writer",
  description: "Writing is a hobby of mine. One fantasy story is on the way.",
  alternates: { canonical: "/writer" },
};

// The story itself is private until he says otherwise: this page describes it and never quotes it.
export default function Writer() {
  return (
    <main id="main">
      <RevealRoot />
      <header className="page__head">
        <div className="wrap">
          <p className="page__num rise">II</p>
          <h1 className="rise" style={{ ["--d" as string]: "90ms" }}>
            Writer
          </h1>
          <p className="page__lead rise" style={{ ["--d" as string]: "200ms" }}>
            Writing is a hobby of mine. I do it because I enjoy it, and one project is on the way.
          </p>
        </div>
      </header>

      <section className="block" aria-labelledby="now-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="now-h">
            Current project
          </h2>
          <div className="prose" data-reveal="">
            <p>
              It&apos;s a fantasy story that grew out of the characters I made for Dungeons &amp; Dragons. Each of them already had a backstory, and
              the story is what happens when they share a world.
            </p>
            <p>It&apos;s still a draft, so there&apos;s nothing to read here yet. When there is, this is where it will be.</p>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="status-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="status-h">
            Status
          </h2>
          <dl className="groups" data-reveal="">
            <div>
              <dt className="label">What</dt>
              <dd>A fantasy story</dd>
            </div>
            <div>
              <dt className="label">Stage</dt>
              <dd>Drafting</dd>
            </div>
            <div>
              <dt className="label label--accent">To read</dt>
              <dd>Nothing yet</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="block" aria-labelledby="how-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="how-h">
            How I work on it
          </h2>
          <ol className="steps" data-reveal="">
            <li>I plan before I write: an outline first, then the chapters.</li>
            <li>I keep a timeline and a file of facts, so the story doesn&apos;t contradict itself.</li>
            <li>I want it to make sense to someone who has never played D&amp;D.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
