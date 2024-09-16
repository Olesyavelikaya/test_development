import "./globals.css";
import Header from './header/page'

import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
