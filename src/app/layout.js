import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bethesda",
  description: "bethesda Nakuru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-20">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
