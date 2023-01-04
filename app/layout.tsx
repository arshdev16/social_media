"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { auth } from "../lib/firebase";
import "../styles/globals.css";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
        {!(usePathname() === "/login" || usePathname() === "/signup") ? (
          <>
            <Footer />
          </>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
