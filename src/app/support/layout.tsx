import { ReactNode } from "react";

export default function SupportLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
