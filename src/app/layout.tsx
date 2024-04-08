import "@/styles/globals.css";

import type { Metadata } from "next";
import {  Noto_Sans_KR } from "next/font/google";

import Providers from "@/components/Provider";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App with Emotion",
  description: "Next.js app with Emotion CSS-in-JS Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <meta charSet="utf-8" />
      <body className={notoSansKR.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
