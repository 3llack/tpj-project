import { Geist, Geist_Mono, PT_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
