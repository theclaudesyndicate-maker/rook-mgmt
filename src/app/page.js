export const metadata = {
  title: "Home",
};

const pageStyle = {
  height: "calc(100vh - 4.5rem)",
  overflow: "hidden",
};

const mainStyle = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(0.75rem, 2vw, 1.5rem) 1.5rem clamp(2rem, 5vw, 3rem)",
  boxSizing: "border-box",
  overflow: "hidden",
  backgroundColor: "#ffffff",
};

const innerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transform: "translateY(-1.5vh)",
};

export default function Home() {
  return (
    <main style={pageStyle}>
      <section aria-label="Home" style={mainStyle}>
        <div style={innerStyle}>
          <img
            src="/logo/rook-mgmt-logo.png"
            alt="ROOK MGMT LLC logo"
            loading="eager"
            style={{
              width: "min(50rem, 86vw)",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </section>
    </main>
  );
}
