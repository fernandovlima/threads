import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Threads App",
  description: "An app for threads",
};

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} `}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
