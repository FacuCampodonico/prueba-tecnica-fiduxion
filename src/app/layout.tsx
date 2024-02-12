import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import Providers from "./components/Providers";
import Appbar from "./components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDo List",
  description: "Create a ToDo List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          
          <Appbar />

          {children}

        </Providers>
      </body>
    </html>
  );
}
