import Link from "next/link";

const headerStyle = {
  padding: "1.2rem clamp(1.5rem, 4vw, 3rem) 0.9rem",
  backgroundColor: "#ffffff",
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  flexWrap: "wrap",
};

const brandStyle = {
  fontSize: "0.68rem",
  fontWeight: 500,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const linksStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
};

const linkStyle = {
  fontSize: "0.67rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

export default function SiteNav() {
  return (
    <header style={headerStyle}>
      <nav aria-label="Primary" style={navStyle}>
        <Link href="/" style={brandStyle}>
          ROOK MGMT LLC
        </Link>

        <div style={linksStyle}>
          <Link href="/mission" style={linkStyle}>
            Mission
          </Link>
          <Link href="/contact" style={linkStyle}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}