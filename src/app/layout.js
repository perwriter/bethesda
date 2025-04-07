import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bethesda Childcare Center | Orphanage in Nakuru",
  description: "Bethesda Childcare Center in Nakuru provides a safe home for orphans and vulnerable children. Learn more about our mission and how you can support us.",
  openGraph: {
    title: "Bethesda Childcare Center | Orphanage in Nakuru",
    description: "Bethesda Childcare Center in Nakuru provides a safe home for orphans and vulnerable children. Learn more about our mission and how you can support us.",
    url: "https://www.bethesdachildcarecenter.com/",
    type: "website",
    images: [
      {
        url: "https://www.bethesdachildcarecenter.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bethesda Childcare Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bethesda Childcare Center | Orphanage in Nakuru",
    description: "Supporting orphans and vulnerable children in Nakuru.",
    image: "https://www.bethesdachildcarecenter.com/og-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.bethesdachildcarecenter.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bethesda Childcare Center | Orphanage in Nakuru" />
        <meta property="og:description" content="Bethesda Childcare Center provides a home for orphans in Nakuru." />
        <meta property="og:url" content="https://www.bethesdachildcarecenter.com/" />
        <meta property="og:image" content="https://www.bethesdachildcarecenter.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bethesda Childcare Center | Orphanage in Nakuru" />
        <meta name="twitter:description" content="Supporting orphans and vulnerable children in Nakuru." />
        <meta name="twitter:image" content="https://www.bethesdachildcarecenter.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Bethesda Childcare Center",
            "url": "https://www.bethesdachildcarecenter.com/",
            "description": "Bethesda Childcare Center provides a home for orphans and vulnerable children in Nakuru.",
            "image": "https://www.bethesdachildcarecenter.com/og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nakuru",
              "addressCountry": "KE",
            },
          })}
        </script>
      </head>
      <body className={inter.className}>
        <div className="pt-20 min-h-screen">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
