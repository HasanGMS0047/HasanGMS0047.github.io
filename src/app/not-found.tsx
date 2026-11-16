import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf" id="main">
      <div>
        <p className="label label--accent">Error 404</p>
        <h1>
          Page not <em>found.</em>
        </h1>
        <p>This page doesn&apos;t exist, or it moved while I wasn&apos;t looking.</p>
        <Link className="btn" href="/">
          Back to the start
        </Link>
      </div>
    </main>
  );
}
