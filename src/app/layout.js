import "./globals.css";
import Nav from "./components/layout/nav.js";
import Footer from "./components/layout/footer.js"
import { icons } from "lucide-react";

export const metadata = {
  title: "The Prince Jacob Foundation",
  description:
    "Non-profit organization with a mission of empowerment and betterment of the average person in need.",
  authors: [{ name: "Omolodun Ayomide" }],
  keywords: [
    "The Prince Jacob Foundation",
    "Prince Jacob",
    "Non-profit Foundation",
    "Charity Organization",
    "Non-profit Organization",
    "PrinceJacob",
    "volunteer foundation",
    "sponsor"
  ],
  themeColor: "#000000",
  metadataBase: new URL("https://theprincejacobfoundation.netlify.app"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "The Prince Jacob Foundation | Welcome",
    description: "The Prince Jacob Foundation is a non-profit organization dedicated to empowering individuals, supporting communities, and improving the lives of those in need through sustainable initiatives and compassionate outreach.",
    url: "https://theprincejacobfoundation.netlify.app",
    siteName: "The Prince Jacob Foundation",
    images: [
      {
        url: "https://theprincejacobfoundation.netlify.app/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75",
        width: 1200,
        height: 630
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Prince Jacob Foundation | Welcome",
    description:
      "The Prince Jacob Foundation is a non-profit organization dedicated to empowering individuals, supporting communities, and improving the lives of those in need through sustainable initiatives and compassionate outreach.",
    images: ["https://theprincejacobfoundation.netlify.app/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"],
    label1: "Built by",
    data1: "The Prince Jacob Foundation",
    label2: "Scroll Time",
    data2: "30 seconds"
  },
  icons: {
    icon: "/images/favicon.ico"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
