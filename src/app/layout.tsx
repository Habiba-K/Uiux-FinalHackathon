import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ecommerce Template",
  description: "Generated by Habiba Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div>
          <main className="max-w-[1440px] mx-auto container">{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
