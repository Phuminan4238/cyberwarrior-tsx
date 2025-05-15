import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Warrior Hackathon 2025",
  description:
    "การแข่งขัน Cyber Warrior Hackathon 2025 ออกแบบโซลูชันป้องกันอาชญากรรมไซเบอร์ ระดับอุดมศึกษา ชิงรางวัลกว่า 100,000 บาท สมัครได้ถึง 31 พ.ค. นี้",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Cyber Warrior Hackathon 2025</title>
        <meta
          name="description"
          content="การแข่งขัน Cyber Warrior Hackathon 2025 ออกแบบโซลูชันป้องกันอาชญากรรมไซเบอร์ ระดับอุดมศึกษา ชิงรางวัลกว่า 100,000 บาท สมัครได้ถึง 31 พ.ค. นี้"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyberwarrior2025.io/" />
        <meta property="og:title" content="Cyber Warrior Hackathon 2025" />
        <meta
          property="og:description"
          content="การแข่งขัน Cyber Warrior Hackathon 2025 ออกแบบโซลูชันป้องกันอาชญากรรมไซเบอร์ ระดับอุดมศึกษา ชิงรางวัลกว่า 100,000 บาท สมัครได้ถึง 31 พ.ค. นี้"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cyberwarrior2025.io/" />
        <meta name="twitter:title" content="Cyber Warrior Hackathon 2025" />
        <meta
          name="twitter:description"
          content="การแข่งขัน Cyber Warrior Hackathon 2025 ออกแบบโซลูชันป้องกันอาชญากรรมไซเบอร์ ระดับอุดมศึกษา ชิงรางวัลกว่า 100,000 บาท สมัครได้ถึง 31 พ.ค. นี้"
        />
        <meta
          name="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* Favicon and fonts */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5C60PFFGHC"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5C60PFFGHC');
            `,
          }}
        />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
