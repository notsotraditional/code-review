import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const TunlTheme: CustomFlowbiteTheme = {
  spinner: {
    color: {
      general: "fill-primary",
    }
  },
  sidebar: {
    root: {
      inner: "h-screen p-5 bg-primary",
    },
    collapse: {
      button: 'flex items-center text-secondary p-3 rounded-lg transition-all hover:text-primary hover:bg-secondary',
      icon: {
        base: "w-5 h-5",
        open: {
          on: "text-secondary",
          off: "text-secondary"
        }
      },
      label: {
          icon: {
            base: "ml-3 w-5 h-5",
          },
      }
    },
    item: {
      base: "flex items-center gap-3 text-secondary hover:text-primary hover:bg-secondary p-3 rounded-lg transition-all",
      icon: {
        base: "w-5 h-5",
        active: 'text-primary',
      },
      content: {
        base: "flex items-center gap-2 text-base",
      },
      active: "flex items-center gap-3 text-primary bg-secondary p-3 rounded-lg transition-all",
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
