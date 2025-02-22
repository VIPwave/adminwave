import { ReactNode } from "react";
import "./globals.css";
import Header from "../../lib/components/navigation/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="full bg-stone-200">
        <div className="min-h-screen bg-black text-white w-[600px] mx-auto my-0;">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
