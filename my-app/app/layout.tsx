import "./globals.css";
import Header from "./header/page";
//import Menu from "./menu/page";

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
        className={`${inter.className} border-box mx-auto bg-backgroundBody sm:max-h-[1515px] sm:min-h-min h-auto`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
