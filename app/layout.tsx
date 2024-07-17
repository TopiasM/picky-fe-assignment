import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript, DarkThemeToggle } from "flowbite-react";
import "./globals.css";
import Link from "next/link";

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
        <link
          rel="icon"
          href="/images/icon-picky@3x.png"
          type="image/png"
          sizes="16x16"
        />
      </head>
      <body className={"min-h-screen dark:bg-gray-800 " + inter.className}>
        <header className="container mx-auto flex flex-row justify-between">
          <Link className="p-2 pt-4 font-bold dark:text-white" href="/">
            Picky Assignment
          </Link>
          <DarkThemeToggle className="my-2" />
        </header>
        <div className="container mx-auto p-2 dark:text-white">{children}</div>
        <div className="sticky top-[100vh] flex justify-center py-4 font-medium text-gray-600">
          © 2024 Topias Martikainen
        </div>
      </body>
    </html>
  );
}
