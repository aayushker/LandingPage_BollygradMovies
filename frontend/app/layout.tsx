import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bollygrad Movies",
  description: "Watch the latest movies and TV shows online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
