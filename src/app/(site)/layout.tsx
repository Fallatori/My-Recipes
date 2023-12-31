import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import PhoneNavigation from "@/components/global/PhoneNavigation";
import Navbar from "@/components/global/Navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

// *******************************
export const fetchCache = "default-no-store";
// *******************************

export const metadata: Metadata = {
  title: "My Recipes",
  description: "Generated by create next app",
  // ************* TODO Change this URL to use an ENV file **************************
  metadataBase: new URL("http://localhost:3000/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("bg-bkg text-content", inter.className)}>
        <div className="hidden md:block bg-nav-2 text-accent-1 sticky top-0 z-20">
          <Navbar />
        </div>
        {children}
        <div className="block md:hidden text-accent-1">
          <PhoneNavigation />
        </div>
      </body>
    </html>
  );
}
