import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript, DarkThemeToggle } from "flowbite-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Picky frontend assignment",
  description: "Picky frontend assignment by Topias Martikainen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={"dark:bg-gray-800 " + inter.className}>
        <header className="fixed w-full">
          <DarkThemeToggle className="float-right m-2" />
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
