import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { MobileNavigation } from "@/components/shared/MobileNavigation";
import { Header } from "@/components/shared/Header";
import { LeftSideBar } from "@/components/shared/LeftSideBar";
import { RightSideBar } from "@/components/shared/RightSideBar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads App",
  description: "An app for threads",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Header />

          <main className={"flex flex-row"}>
            <LeftSideBar />
            <section className={"main-container"}>
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>

          <MobileNavigation />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
