export const metadata = {
  title: "Mission",
};

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "clamp(2.25rem, 4.5vw, 3.5rem) 1.5rem clamp(3rem, 6vw, 4.5rem)",
  backgroundColor: "#ffffff",
};

const articleStyle = {
  width: "100%",
  maxWidth: "39rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.95rem",
};

const labelStyle = {
  margin: "0 0 0.15rem",
  fontSize: "0.66rem",
  fontWeight: 500,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
};

const paragraphStyle = {
  margin: 0,
  fontFamily:
    'var(--font-geist-sans), "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: "clamp(0.9rem, 0.95vw, 0.95rem)",
  lineHeight: 1.68,
  letterSpacing: "0.008em",
};

export default function MissionPage() {
  return (
    <main>
      <section aria-labelledby="mission-title" style={mainStyle}>
        <article style={articleStyle}>
          <h1 id="mission-title" style={labelStyle}>
            ROOK MGMT LLC
          </h1>

          <p style={paragraphStyle}>
            ROOK MGMT is a management company built to develop and sustain a
            portfolio of independent ventures. We provide the legal structure,
            financial discipline, and operational infrastructure that allow
            focused creative and commercial work to run without compromise. We
            operate in the background so our companies can operate in the
            foreground.
          </p>

          <p style={paragraphStyle}>
            Each venture we hold carries its own identity, its own team, and
            its own market relationship. Our role is not to direct the work —
            it is to make the foundation sound, then step back. Across every
            company in the portfolio, one standard holds: craft over speed,
            precision in agreements, and clarity between partners on every
            decision that matters.
          </p>

          <p style={paragraphStyle}>
            Our founders bring almost three decades of combined experience in
            film, television, music videos, and global campaigns, operating
            across New Orleans, New York, Miami, Los Angeles, Boston, and
            Atlanta — industries defined by cross-disciplinary collaboration,
            logistical precision, and the discipline of executing under
            pressure in service of something larger. That background shapes
            everything: we think in systems, we plan for what goes wrong, and
            we hold every venture to a standard that outlasts the moment of its
            launch. We don&apos;t build for exits. We build things meant to endure.
          </p>
        </article>
      </section>
    </main>
  );
}