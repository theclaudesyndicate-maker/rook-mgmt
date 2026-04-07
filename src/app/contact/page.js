export const metadata = {
  title: "Contact",
};

const mainStyle = {
  minHeight: "calc(100vh - 4.5rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(1.75rem, 4vw, 3rem) 1.5rem 4rem",
  backgroundColor: "#ffffff",
};

const innerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  textAlign: "center",
};

const labelStyle = {
  margin: 0,
  fontSize: "0.66rem",
  fontWeight: 500,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
};

const linkStyle = {
  color: "#000000",
  fontSize: "0.9rem",
  letterSpacing: "0.04em",
  textDecoration: "none",
};

export default function ContactPage() {
  return (
    <main>
      <section aria-labelledby="contact-title" style={mainStyle}>
        <div style={innerStyle}>
          <h1 id="contact-title" style={labelStyle}>
            Contact
          </h1>
          <a href="mailto:team@rook-mgmt.com" style={linkStyle}>
            team@rook-mgmt.com
          </a>
        </div>
      </section>
    </main>
  );
}