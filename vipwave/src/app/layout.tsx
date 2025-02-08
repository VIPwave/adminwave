import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className="grid grid-rows-[1fr_10rem_auto] overflow-x-hidden bg-black min-h-screen font-sans">
        {children}
        <div className="main">
          <div className="relative z-10 grid grid-rows-[auto_1fr] min-h-[12rem] bg-[#ffc600]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffc600] filter-blur">
              <div className="bubbles">
                {Array.from({ length: 128 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-[#ffc600]"
                    style={{
                      left: `${-5 + Math.random() * 110}%`,
                      animation: `bubble-size ${
                        2 + Math.random() * 2
                      }s ease-in infinite ${
                        -1 * (2 + Math.random() * 2)
                      }s, bubble-move ${
                        2 + Math.random() * 2
                      }s ease-in infinite ${-1 * (2 + Math.random() * 2)}s`,
                      width: `${2 + Math.random() * 4}rem`,
                      height: `${2 + Math.random() * 4}rem`,
                      bottom: "-4rem",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="z-20 grid grid-cols-[1fr_auto] gap-16 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col">
                  <b className="text-white">Athod</b>
                  <a href="#" className="text-[#F5F7FA] no-underline">
                    Pamuz
                  </a>
                  <a href="#" className="text-[#F5F7FA] no-underline">
                    Vapert
                  </a>
                  <a href="#" className="text-[#F5F7FA] no-underline">
                    Neesk
                  </a>
                  <a href="#" className="text-[#F5F7FA] no-underline">
                    Omemanen
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <a
                  className="w-16 h-16 bg-cover bg-center mb-2"
                  href="https://codepen.io/z-"
                  target="_blank"
                  style={{
                    backgroundImage:
                      'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")',
                  }}
                />
                <p className="text-[#F5F7FA] text-sm m-0">©2019 Not Really</p>
              </div>
            </div>
            <svg style={{ position: "fixed", top: "100vh" }}>
              <defs>
                <filter id="blob">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="blob"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </body> */}
      <body>{children}</body>
    </html>
  );
}
