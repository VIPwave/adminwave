import { ReactNode } from "react";
import "./globals.css";
import Header from "@/lib/components/navigation/Header";
import Footer from "@/lib/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="full bg-stone-200">
        <div className="min-h-screen bg-black text-white w-[600px] mx-auto my-0">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
