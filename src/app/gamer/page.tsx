import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/lib/data";
import { RevealRoot } from "@/components/reveal-root";

export const metadata: Metadata = {
  title: "Gamer",
  description: "The games I keep coming back to, Dungeons & Dragons and chess.",
  alternates: { canonical: "/gamer" },
};

export default function Gamer() {
  return (
    <main id="main">
      <RevealRoot />
      <header className="page__head">
        <div className="wrap">
          <p className="page__num rise">III</p>
          <h1 className="rise" style={{ ["--d" as string]: "90ms" }}>
            Gamer
          </h1>
          <p className="page__lead rise" style={{ ["--d" as string]: "200ms" }}>
            Mostly role-playing games, on a screen and at a table. Also chess, which I play competitively.
          </p>
        </div>
      </header>

      <section className="block" aria-labelledby="games-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="games-h">
            Games I keep coming back to
          </h2>
          <ul className="rows" data-reveal="">
            {games.map((g) => (
              <li key={g.name}>
                <span>{g.name}</span>
                <span className="label">{g.genre}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block" aria-labelledby="dnd-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="dnd-h">
            Dungeons &amp; Dragons
          </h2>
          <div className="split" data-reveal="">
            <div className="prose">
              <p>
                I keep a growing folder of D&amp;D characters. Each one has a backstory, a character sheet on the 2024 rules and portraits. I&apos;m
                better at inventing them than at keeping them alive.
              </p>
              <p>
                They&apos;re also where my <Link href="/writer">writing</Link> comes from.
              </p>
            </div>
            <p className="figure">
              <strong>20+</strong>
              <span className="label">characters so far</span>
            </p>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="chess-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="chess-h">
            Chess
          </h2>
          <div className="split split--photo" data-reveal="">
            <div className="prose">
              <p>I play competitive chess. It&apos;s the one game where I can&apos;t blame the dice.</p>
            </div>
            <figure className="photo">
              <img
                src="/images/work/photo-f58915687-960.webp"
                srcSet="/images/work/photo-f58915687-500.webp 500w, /images/work/photo-f58915687-960.webp 960w"
                sizes="(max-width: 900px) 92vw, 34vw"
                alt="Carved metal chess pieces lined up on a wooden board"
                width={960}
                height={640}
                loading="lazy"
              />
              <figcaption>Photograph by Lou Levit (CC0), via Wikimedia Commons.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
