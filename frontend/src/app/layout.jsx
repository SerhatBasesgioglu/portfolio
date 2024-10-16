import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Serhat Başesgioğlu",
    template: "%s - Serhat Başesgioğlu",
  },
  description: "You can read my portfolio from here!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
