import { Geist, Geist_Mono, PT_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/layout/nav.js";

export const metadata = {
  title: "The Prince Jacob Foundation",
  description:
    "Non-profit organization with a mission of empowerment and betterment of the average person in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        {/* Apply Footer here */}
      </body>
    </html>
  );
}
