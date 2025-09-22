import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Nav from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonel Teaño | Software Engineer & Developer",
  description:
    "Portfolio of Jonel Teaño — Computer Science graduate and Software Engineer from Cavite, Philippines. Passionate about web development, system automation, and building innovative solutions.",
  keywords: [
    "Jonel Teaño",
    "Software Engineer Philippines",
    "Web Developer Cavite",
    "Full Stack Developer",
    "Portfolio Website",
    "Computer Science",
    "System Automation",
    "Next.js Developer",
    "Node.js Developer",
  ],
  openGraph: {
    title: "Jonel Teaño | Software Engineer & Developer",
    description:
      "Explore the portfolio of Jonel Teaño — showcasing projects in web development, automation, and modern software engineering.",
    url: "https://nelteano.vercel.app", // replace with your actual domain
    siteName: "Jonel Teaño Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/nelteano", // image when shared the link replace with your image
        width: 1200,
        height: 630,
        alt: "Jonel Teaño Portfolio Preview",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://nelteano.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Link your official profiles */}
        <link rel="me" href="https://www.linkedin.com/in/teanojonel" />
        <link rel="me" href="https://www.facebook.com/96jonel96" />

        {/* Structured Data (JSON-LD) for Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jonel Teaño",
              url: "https://nelteano.vercel.app",
              sameAs: [
                "https://www.facebook.com/96jonel96",
                "https://www.linkedin.com/in/teanojonel",
              ],
              jobTitle: "Software Engineer & Developer",
              alumniOf: "Cavite State University",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cavite",
                addressCountry: "Philippines",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="var(--primary)" showSpinner={false} />
          <Nav />
          {children}
          <Toaster
            toastOptions={{
              style: {
                background: "var(--background)",
                color: "var(--foreground)",
                borderWidth: "1px",
                borderColor: "var(--border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
