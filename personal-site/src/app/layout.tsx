import { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Christian Garcia',
  description: "Christian Garcia's personal website, showcasing his projects & everything else he's up to",
  keywords: ['personal website', 'portfolio', 'software engineering', 'Northeastern'],
  icons: {
    icon: '/images/site-icon.webp',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/mmt1ovw.css" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
