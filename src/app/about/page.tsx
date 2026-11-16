import type { Metadata } from "next";
import { site, statBlock } from "@/lib/data";
import { RevealRoot } from "@/components/reveal-root";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am, in the shape of a character sheet, and how to reach me.",
  alternates: { canonical: "/about" },
};

// The one place on the site that borrows a D&D format outright: the facts are laid out like a stat block.
export default function About() {
  return (
    <main id="main">
      <RevealRoot />
      <header className="page__head">
        <div className="wrap">
          <p className="page__num rise">About</p>
          <h1 className="rise" style={{ ["--d" as string]: "90ms" }}>
            Mahadi Hasan
          </h1>
          <p className="page__lead rise" style={{ ["--d" as string]: "200ms" }}>
            I&apos;m a student who is still learning and exploring, and I haven&apos;t settled on one area yet. Here are the facts, laid out the way a
            D&amp;D book would list them.
          </p>
        </div>
      </header>

      <section className="block" aria-labelledby="sheet-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="sheet-h">
            Character sheet
          </h2>
          <div className="stat" data-reveal="">
            <h3>{site.name}</h3>
            <p className="stat__sub">Human student, Dhaka. Goes by Mahadi; online as Forest47.</p>
            <hr />
            <dl>
              {statBlock.top.map((r) => (
                <div key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <hr />
            <dl>
              {statBlock.mid.map((r) => (
                <div key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <hr />
            <h4>Feats</h4>
            <ul>
              {statBlock.feats.map((r) => (
                <li key={r.k}>
                  <em>{r.k}.</em> {r.v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block" id="contact" aria-labelledby="contact-h">
        <div className="wrap block__grid">
          <h2 className="block__label" id="contact-h">
            Contact
          </h2>
          <div data-reveal="">
            <p className="block__intro">
              Have an internship, a project or a question? Fill this in and it opens a message in your email app, or write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. My <a href={site.resume}>resume</a> is a one-page PDF.
            </p>
            <ContactForm email={site.email} />
          </div>
        </div>
      </section>
    </main>
  );
}
