import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SystemShell from "./components/system-shell";
import { profile } from "./data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yuhanchen.me"),
  title: "Yuhan Chen | Computer Science @ Stony Brook University",
  description: "Yuhan Chen is a Computer Science student at Stony Brook University interested in AI systems, software engineering, algorithms, and practical technology.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Yuhan Chen | Computer Science @ Stony Brook University",
    description: "Yuhan Chen is a Computer Science student at Stony Brook University interested in AI systems, software engineering, algorithms, and practical technology.",
    siteName: "Yuhan Chen",
  },
  icons: { icon: "/favicon.ico" },
};

const personJsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: profile.name, url: "https://yuhanchen.me",
  description: "Computer Science student at Stony Brook University interested in AI systems, software engineering, algorithms, and practical technology.",
  jobTitle: "Computer Science Student", affiliation: { "@type": "CollegeOrUniversity", name: profile.university },
  knowsAbout: ["AI Systems", "Software Engineering", "Data Structures & Algorithms", "Object-Oriented Programming", "FTC Robotics Programming"], sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
        <SystemShell>{children}</SystemShell>
      </body>
    </html>
  );
}
