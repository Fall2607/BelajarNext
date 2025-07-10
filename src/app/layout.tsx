import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fontSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fallen Site",
  description: "Fallen is a Next.js site with Geist UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <header className="bg-gray-900">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="text-xl font-bold text-white">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Fallen
              </Link>
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="home"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="product"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
