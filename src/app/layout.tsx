import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "BOOKIFY",
  description: "BOOKIFY – the internet book store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
