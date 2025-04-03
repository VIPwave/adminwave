import { ReactNode } from 'react';
import './globals.css';
import Header from '@/lib/components/navigation/Header';
import Footer from '@/lib/components/footer/Footer';
import Script from 'next/script';
import { Metadata } from 'next';

// metadata
export const metadata: Metadata = {
  title: 'ADMINWAVE',
  description: '빅뱅 음원총공팀',
  icons: { icon: '/icon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="full bg-stone-200">
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qnzewyzvm9");
            `,
          }}
        />
        <div className="min-h-screen bg-black text-white max-w-[600px] w-full mx-auto my-0">
          <Header />
          <main className="text-sm">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
