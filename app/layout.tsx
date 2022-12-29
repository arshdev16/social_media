import Navbar from "../components/Navbar";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";
import "../styles/globals.css";

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
      </body>
    </html>
  );
}
