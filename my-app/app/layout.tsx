import "./globals.css";
import Header from "./header/page";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} border-box mx-auto bg-backgroundBody md:h-[1515px] md:min-h-min h-auto`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
