import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Header from "@/components/common/layout";
import Provider from "@/auth/Provider";

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
          <Provider>
            <Header />
            {children}
          </Provider>
        </Theme>
      </body>
    </html>
  );
}
