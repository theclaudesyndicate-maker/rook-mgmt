import { Geist, Geist_Mono } from "next/font/google";
import SiteNav from "../components/SiteNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ROOK MGMT LLC",
    template: "%s | ROOK MGMT LLC",
  },
  description: "ROOK MGMT LLC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
