import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="fav.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
