import type { Metadata } from "next";
import Script from 'next/script';
import Page from "./page";

export const metadata: Metadata = {
  title: "Trust",
  description: "A valentine package",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col min-h-screen"}>
        <Script src="52132288-2c9d-443e-9325-d534c1e63399.js" strategy="beforeInteractive" />
        <Page />
      </body>
    </html>
  );
}
