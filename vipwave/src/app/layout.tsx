import { ReactNode } from "react";
import "./globals.css";
import Header from "@/lib/components/navigation/Header";
import Footer from "@/lib/components/footer/Footer";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>VIPWAVE</title>
        <meta name="description" content="빅뱅 음원총공팀" />
      </Head>
      <body className="full bg-stone-200">
        <div className="min-h-screen bg-black text-white max-w-[600px] w-full mx-auto my-0">
          <Header />
          <main className="text-sm">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
