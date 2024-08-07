import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const TunlTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      inner: "h-screen p-5 bg-primary",
    },
    item: {
      base: "flex items-center mb-5 gap-3 text-secondary hover:text-primary hover:bg-secondary p-3 rounded-lg transition-all",
      icon: {
        base: "w-5 h-5",
      },
      content: {
        base: "flex items-center gap-2 text-base",
      }
    }
  }
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tunl - Dashboard",
  description: "For code review purposes",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <Flowbite theme={{theme: TunlTheme }} >
        <body className={inter.className}>{children}</body>
      </Flowbite>
    </html>
  );
}
