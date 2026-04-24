export const metadata = {
  title: "Mission",
};

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "clamp(3.5rem, 6vw, 5rem) 1.5rem clamp(3rem, 6vw, 4.5rem)",
  backgroundColor: "#ffffff",
};

const articleStyle = {
  width: "100%",
  maxWidth: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.95rem",
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
      <section aria-label="Mission" style={mainStyle}>
        <article style={articleStyle}>
          <p style={paragraphStyle}>
            ROOK MGMT is built to develop and sustain a portfolio of independent
            ventures. We provide the legal structure, financial discipline, and
            operational infrastructure that let creative and commercial work stay
            focused. We operate in the background so our companies can operate
            in the foreground.
          </p>

          <p style={paragraphStyle}>
            Each venture we hold carries its own identity, its own team, and
            its own market relationship. Our role is not to direct the work. It
            is to make the foundation sound, then step back. Across every
            company in the portfolio, one standard holds: craft over speed,
            precision in agreements, and clarity between partners.
          </p>

          <p style={paragraphStyle}>
            Our founders bring almost three decades of combined experience in
            film, television, music videos, and global campaigns, fields built
            on cross-disciplinary collaboration, logistical precision, and the
            discipline of executing under pressure. That experience spans Los
            Angeles, New Orleans, New York, Miami, Boston, and Atlanta. It
            shapes everything: we think in systems, we plan for what goes wrong,
            and we hold every venture to a standard that outlasts the moment of
            its launch. We don&apos;t build for exits. We build things meant to
            endure.
          </p>
        </article>
      </section>
    </main>
  );
}
