
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { profile } from "./data/profile";
import styles from "./portfolio.module.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const title = "Yuhan Chen | Software Engineering and Applied AI";
const description = "Yuhan Chen is a computer science student at Stony Brook University building real-time voice applications and tools that automate manual workflows.";
const siteUrl = "https://yuhanchen.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title, description, siteName: profile.name },
  icons: { icon: "/favicon.ico" },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  description,
  jobTitle: "Computer Science Student",
  affiliation: { "@type": "CollegeOrUniversity", name: profile.university },
  knowsAbout: ["Software Engineering", "Applied AI", "Real-time Voice Applications"],
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geist.variable}>
      <body className={styles.body}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
