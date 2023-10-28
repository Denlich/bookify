import type { Metadata } from "next";
import { Container, Grid, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Header, Sidebar } from "@/components/common/layout";
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
      <body className="bg-cyan-50">
        <Theme>
          <Provider>
            <Header />
            <Container>
              <Grid columns={{ initial: "1", sm: "5" }} gap="5">
                <Sidebar />
                <main className="md:col-span-4">{children}</main>
              </Grid>
            </Container>
          </Provider>
        </Theme>
      </body>
    </html>
  );
}
