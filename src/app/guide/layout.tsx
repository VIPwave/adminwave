import { ReactNode } from "react";

export default function GuideLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className="p-5">{children}</div>;
}
